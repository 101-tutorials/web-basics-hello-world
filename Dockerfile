FROM python:latest
RUN mkdir /app
WORKDIR /app
COPY . /app/ 
EXPOSE 8000
CMD python -m http.server 8000
