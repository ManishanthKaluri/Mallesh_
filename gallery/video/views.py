from django.shortcuts import render
from .models import Video

def video_gallery(request):
    videos = Video.objects.all()
    return render(request, 'video/video_gallery.html', {'videos': videos})
