# CreateX Backend

FastAPI placeholder backend for CreateX.

## Run locally

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

The API health endpoint is available at `GET /health`.
