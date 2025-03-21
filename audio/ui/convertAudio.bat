for %%a in (*.ogg) do (
	ffmpeg -i "%%a" -ab 96k "%%~na.mp3"
)

for %%a in (*.wav) do (
	ffmpeg -i "%%a" -ab 96k "%%~na.mp3"
)