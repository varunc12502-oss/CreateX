from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_projects() -> list[dict[str, str]]:
    return [
        {"id": "project_001", "title": "Software Engineer Resume", "type": "resume"},
        {"id": "project_002", "title": "ML Fundamentals PPT", "type": "presentation"},
    ]


@router.post("/")
def create_project() -> dict[str, str]:
    return {"message": "Create project placeholder"}


@router.delete("/{project_id}")
def delete_project(project_id: str) -> dict[str, str]:
    return {"message": "Delete project placeholder", "id": project_id}
