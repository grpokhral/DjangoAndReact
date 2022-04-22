
from email.mime import image
from xml.dom.minidom import Document
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [

    path('admin/', admin.site.urls),
    url('tinymce/', include('tinymce.urls')),
    url('api/', include('App.urls'))


]
urlpatterns = urlpatterns + \
    static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
