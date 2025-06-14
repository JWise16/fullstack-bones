#!/bin/bash
docker compose up -d
sleep 5  # Wait for Ollama to start
docker compose exec ollama ollama pull llama3
