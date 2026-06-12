from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_resumes() -> list[dict[str, str]]:
    return [{"id": "resume_001", "title": "Software Engineer Resume"}]


@router.post("/generate")
def generate_resume() -> dict[str, str]:
    return {"message": "AI resume generation placeholder"}


@router.post("/upload")
def upload_resume() -> dict[str, str]:
    return {"message": "Resume upload placeholder"}


@router.get("/{resume_id}/ats-score")
def get_ats_score(resume_id: str) -> dict[str, str | int]:
    return {"resume_id": resume_id, "score": 92}
