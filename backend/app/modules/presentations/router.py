from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_presentations() -> list[dict[str, str]]:
    return [{"id": "deck_001", "title": "ML Fundamentals PPT"}]


@router.post("/generate")
def generate_presentation() -> dict[str, str]:
    return {"message": "Presentation generation placeholder"}


@router.post("/{presentation_id}/export")
def export_presentation(presentation_id: str) -> dict[str, str]:
    return {"message": "Presentation export placeholder", "id": presentation_id}
