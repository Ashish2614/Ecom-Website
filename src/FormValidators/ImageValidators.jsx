import React from 'react'

export default function ImageValidators(e) {
  if (e.target.files.length === 1) {
    let pic = e.target.files[0]
    if (!["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"].includes(pic.type))
      return "Invalid Pic format, please upload image of type jpeg,jpg,png,gif or webp"
    else if (pic.size > 1048576)
      return "Pic size is too heavy , please upload image upto 1 mb"
    else
      return ""
  }
  else {
    let errorMessage = []
    Array.from(e.target.files).forEach(pic, index => {
      if (!["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"].includes(pic.type))
        errorMessagepush(`Invalid Pic${index + 1} format, please upload image of type jpeg,jpg,png,gif or webp`)
      else if (pic.size > 1048576)
        errorMessage.push(`Pic${index + 1} size is too heavy , please upload image upto 1 mb`)

    })
    return errorMessage.length ? errorMessage.join("|") : ""
  }

}