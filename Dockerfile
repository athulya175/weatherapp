FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

# Collect static files (VERY IMPORTANT)
RUN python manage.py collectstatic --noinput

# Run Django with Gunicorn
CMD ["gunicorn", "weatherproject.wsgi:application", "--bind", "0.0.0.0:8000"]