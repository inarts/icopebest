from pathlib import Path
from datetime import date

from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

PROJECT = "I.COPE.BEST"
SUBTITLE = "Financial Technology Inclusion - Research Project Website"
AUTHOR_LINE = "Inga Jonaityte - Ca Foscari University of Venice"
TODAY = date.today().isoformat()

PLACEHOLDERS = [
    ("public/documents/reports/icopebest_project_overview.pdf",
     "Project Overview",
     "Placeholder PDF"),

    ("public/documents/reports/icopebest_working_paper_1.pdf",
     "Working Paper 1",
     "Working paper - draft in progress"),

    ("public/documents/reports/icopebest_working_paper_2.pdf",
     "Working Paper 2",
     "Manuscript in preparation"),

    ("public/documents/reports/icopebest_final_report.pdf",
     "Final Report",
     "Final report placeholder"),

    ("public/documents/deliverables/icopebest_deliverables_list.pdf",
     "Deliverables List",
     "Administrative deliverables placeholder"),

    ("public/documents/events/icopebest_event_agenda.pdf",
     "Event Agenda",
     "Event agenda placeholder"),

    ("public/documents/slides/icopebest_presentation_slides.pdf",
     "Presentation Slides",
     "Slides placeholder"),
]

def draw_placeholder(pdf_path: Path, title: str, status: str):
    pdf_path.parent.mkdir(parents=True, exist_ok=True)

    c = canvas.Canvas(str(pdf_path), pagesize=A4)
    width, height = A4

    left = 72
    top = height - 72
    line = 16

    c.setFont("Helvetica-Bold", 18)
    c.drawString(left, top, PROJECT)

    c.setFont("Helvetica", 11)
    c.drawString(left, top - 2 * line, SUBTITLE)

    c.setFont("Helvetica-Bold", 20)
    c.drawString(left, top - 5 * line, title)

    c.setFont("Helvetica", 12)
    c.drawString(left, top - 7 * line, status)

    c.setFont("Helvetica", 10)
    c.drawString(left, top - 10 * line, AUTHOR_LINE)
    c.drawString(left, top - 11 * line, "Last updated: " + TODAY)

    c.setFont("Helvetica-Oblique", 9)
    c.drawString(left, top - 14 * line, "This is a placeholder PDF.")
    c.drawString(left, top - 15 * line, "The final document will replace this file.")

    c.setFont("Helvetica", 8)
    c.drawString(left, 54, "Please cite the final version once available.")

    c.showPage()
    c.save()

def main():
    count = 0
    for path, title, status in PLACEHOLDERS:
        draw_placeholder(Path(path), title, status)
        count += 1
    print(f"Created {count} placeholder PDFs.")

if __name__ == "__main__":
    main()
