#!/bin/bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
sleep 5  # Wait for Ollama to start
docker compose exec ollama ollama pull llama3
