from django.db import models

class Video(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    video = models.FileField(upload_to='videos/')  # Update this line

    def _str_(self):
        return self.title

    class Meta:
        verbose_name = 'video'
        verbose_name_plural = 'videos'