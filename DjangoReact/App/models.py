from distutils.command.upload import upload
from email import message
from email.mime import image
from operator import mod
from pyexpat import model
from time import timezone
from django.db import models
from ckeditor.fields import RichTextField
# from tinymce.models import HTMLField
# from tinymce import models as tinymce_models

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)
    date = models.DateField()

    def __str__(self):
        return self.name


class Blog(models.Model):
    category_name = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    short_disc = models.TextField()
    disc = RichTextField(blank=True,null=True)
    image = models.ImageField(upload_to="image")
    # author = models.ForeignKey('auth.user')
    post_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class About(models.Model):
    short_disc = models.CharField(max_length=400)
    long_disc = RichTextField(blank=True,null=True)
    image = models.ImageField(upload_to="image")
    post_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.short_disc


class Comment(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    message = models.TextField()

    post_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
