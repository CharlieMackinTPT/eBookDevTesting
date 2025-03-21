for %%a in (*.ogg) do (
	ffmpeg -i "%%a" -ab 96k "%%~na.mp3"
)