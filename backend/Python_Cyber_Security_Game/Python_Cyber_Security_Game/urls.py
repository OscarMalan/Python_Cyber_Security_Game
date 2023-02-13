from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    # Loads the app
    path("", include("website.urls")),
]

# Helps with loading CSS
urlpatterns += staticfiles_urlpatterns()