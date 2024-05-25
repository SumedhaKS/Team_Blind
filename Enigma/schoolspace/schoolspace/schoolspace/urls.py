# urls.py
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from schoolspace.views import home, login, profile, register, teachers  # Corrected function names

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('login/', login, name='login'),
    path('profile/', profile, name='profile'),
    path('register/', register, name='register'),  # Corrected function name
    path('teachers/', teachers, name='teachers'),  # Corrected function name
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
