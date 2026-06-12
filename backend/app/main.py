from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.modules.ai.router import router as ai_router
from app.modules.auth.router import router as auth_router
from app.modules.documents.router import router as documents_router
from app.modules.pdf.router import router as pdf_router
from app.modules.presentations.router import router as presentations_router
from app.modules.projects.router import router as projects_router
from app.modules.resumes.router import router as resumes_router
from app.modules.settings.router import router as settings_router
from app.modules.users.router import router as users_router

app = FastAPI(title="CreateX API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_prefix = "/api"

app.include_router(auth_router, prefix=f"{api_prefix}/auth", tags=["auth"])
app.include_router(users_router, prefix=f"{api_prefix}/users", tags=["users"])
app.include_router(ai_router, prefix=f"{api_prefix}/ai", tags=["ai"])
app.include_router(resumes_router, prefix=f"{api_prefix}/resumes", tags=["resumes"])
app.include_router(
    presentations_router,
    prefix=f"{api_prefix}/presentations",
    tags=["presentations"],
)
app.include_router(pdf_router, prefix=f"{api_prefix}/pdf", tags=["pdf"])
app.include_router(documents_router, prefix=f"{api_prefix}/documents", tags=["documents"])
app.include_router(projects_router, prefix=f"{api_prefix}/projects", tags=["projects"])
app.include_router(settings_router, prefix=f"{api_prefix}/settings", tags=["settings"])


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok", "service": "createx-api"}
