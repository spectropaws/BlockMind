import os
import re
import json
from groq import Groq

client = Groq(
    api_key=os.environ.get("GROQ_API_KEY"),
)


def fetch_schedule(farm_details):
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": """you are an ai that schedules processes of farming on a calendar.
                You take input various factors like what crop the farmer wants
                to plow, what is the condition of the soil humidity, rainfall
                and temperature and then return a json string in the following 
                format:
                [{
                   "process": "string", (could be something like plowing, irrigation or harvesting)
                   "start": "iso 8601 datetime",
                   "end": "iso 8601 datetime",
                   "color": "string" (hexcode of a unique color associated with unique values of process)
                },
                {
                    // details of another process
                }
                ]
                Give a detailed schedule and use only light colors.
                While making the schedule, keep in mind the seasons and weather conditions
                that may happen on the planned date.
                your output should only contain the json object and nothing else."""
            },
            {
                "role": "user",
                "content": json.dumps(farm_details)
            }
        ],        model="deepseek-r1-distill-llama-70b",  # your model name
    )

    groq_response = chat_completion.choices[0].message.content
    final_response = re.sub(r"<think>.*?</think>\s*", "",
                            groq_response, flags=re.DOTALL).strip()
    final_response = final_response.replace("```json", "").replace("```", "").strip()
    return json.loads(final_response)
