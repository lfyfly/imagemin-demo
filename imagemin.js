const config = {
  img_src: 'src',
  img_dest: 'dist',
  imgmin_quality: 70
}

const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg')
 imagemin([`${config.img_src}/**/*.{jpg,png}`], config.img_dest, {
		plugins: [
      imageminMozjpeg({ quality: config.imgmin_quality }),
			imageminPngquant({quality: config.imgmin_quality})
		]
	}).then(files=>{
    console.log(files.forEach(file =>{
      console.log(file.path)
    }))
  })

