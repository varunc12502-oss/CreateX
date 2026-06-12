from fastapi import APIRouter
from pydantic import BaseModel, EmailStr

from app.core.security import create_access_token

router = APIRouter()


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class SignupRequest(LoginRequest):
    full_name: str


@router.post("/signup")
def signup(payload: SignupRequest) -> dict[str, str]:
    token = create_access_token(payload.email)
    return {"message": "Signup placeholder", "access_token": token, "token_type": "bearer"}


@router.post("/login")
def login(payload: LoginRequest) -> dict[str, str]:
    token = create_access_token(payload.email)
    return {"message": "Login placeholder", "access_token": token, "token_type": "bearer"}


@router.post("/logout")
def logout() -> dict[str, str]:
    return {"message": "Logout placeholder"}
