from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_documents() -> list[dict[str, str]]:
    return [{"id": "doc_001", "title": "Smart Irrigation Report"}]


@router.post("/")
def create_document() -> dict[str, str]:
    return {"message": "Create document placeholder"}


@router.post("/{document_id}/export")
def export_document(document_id: str) -> dict[str, str]:
    return {"message": "Document export placeholder", "id": document_id}
