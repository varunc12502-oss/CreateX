from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class UserProfile(BaseModel):
    id: str = "local-user"
    full_name: str = "Creator"
    plan: str = "Free"


@router.get("/me")
def get_current_user() -> UserProfile:
    return UserProfile()


@router.patch("/me")
def update_current_user(payload: UserProfile) -> UserProfile:
    return payload
