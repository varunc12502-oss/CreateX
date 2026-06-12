from fastapi import APIRouter

router = APIRouter()


@router.post("/upload")
def upload_pdf() -> dict[str, str]:
    return {"message": "PDF upload placeholder"}


@router.post("/merge")
def merge_pdfs() -> dict[str, str]:
    return {"message": "Merge PDFs placeholder"}


@router.post("/split")
def split_pdf() -> dict[str, str]:
    return {"message": "Split PDF placeholder"}


@router.post("/compress")
def compress_pdf() -> dict[str, str]:
    return {"message": "Compress PDF placeholder"}


@router.post("/convert")
def convert_pdf() -> dict[str, str]:
    return {"message": "PDF conversion placeholder"}
