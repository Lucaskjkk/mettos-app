from django.contrib.auth.models import User
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = "Cria o usuário demo Ana Ribeiro (ana@minuta.app / minuta123)"

    def handle(self, *args, **options):
        user, created = User.objects.get_or_create(
            username="ana",
            defaults={
                "email": "ana@minuta.app",
                "first_name": "Ana",
                "last_name": "Ribeiro",
            },
        )
        user.email = "ana@minuta.app"
        user.first_name = "Ana"
        user.last_name = "Ribeiro"
        user.set_password("minuta123")
        user.save()
        action = "criado" if created else "atualizado"
        self.stdout.write(self.style.SUCCESS(f"Usuário demo {action}: ana@minuta.app / minuta123"))
