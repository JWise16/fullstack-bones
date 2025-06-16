#!/bin/bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
# sleep 5  # Wait for Ollama to start
# docker compose exec ollama ollama pull llama3
