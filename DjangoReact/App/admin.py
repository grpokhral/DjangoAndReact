from django.contrib import admin
from App.models import Category, Blog, About, Comment

# Register your models here.
admin.site.register(Category)
admin.site.register(Blog)
admin.site.register(About)
admin.site.register(Comment)
