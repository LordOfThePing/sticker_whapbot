.PHONY: down up-build logs-app rebuild-app

down:
	docker compose down

up-build:
	docker compose up -d --build --force-recreate

logs-app:
	docker compose logs -f app

rebuild-app: down up-build logs-app
