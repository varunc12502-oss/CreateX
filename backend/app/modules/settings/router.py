from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def get_settings() -> dict[str, bool | str]:
    return {"theme": "dark", "notifications": True, "ai_assist": True}


@router.patch("/")
def update_settings() -> dict[str, str]:
    return {"message": "Update settings placeholder"}
