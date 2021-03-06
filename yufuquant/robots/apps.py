from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class RobotsConfig(AppConfig):
    name = "robots"
    verbose_name = _("Robots")

    def ready(self):
        try:
            from . import signals
        except ImportError:
            pass
