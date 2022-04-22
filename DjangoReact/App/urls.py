from unicodedata import name
from django.urls import path
from django.urls import path
from App import views
urlpatterns = [
    path('category/', views.CategoryList, name="category"),
    path('blog/', views.BlogList, name="blogList"),
    path('detailList/<str:pk>/', views.DetailList, name="detailList"),
    path('about/', views.AboutList, name="aboutList"),
    path('comment/', views.CommentList, name="comment"),
    path('comment/create', views.CreateComment, name="commentcreate"),
]
