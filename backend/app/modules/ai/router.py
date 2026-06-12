from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class PromptRequest(BaseModel):
    prompt: str


@router.post("/generate")
def generate(payload: PromptRequest) -> dict[str, str]:
    return {"message": "AI generation placeholder", "prompt": payload.prompt}


@router.post("/summarize")
def summarize(payload: PromptRequest) -> dict[str, str]:
    return {"message": "Summarization placeholder", "prompt": payload.prompt}
