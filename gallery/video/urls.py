from django.urls import path
from . import views

app_name = 'video'

urlpatterns = [
    path('video_gallery/', views.video_gallery, name='video_gallery'),
    # other URL patterns for your video app
]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       