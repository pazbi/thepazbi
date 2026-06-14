---
title: "How to Train a LoRA on Replicate and Use It for Personalised AI-Generated Images"
description: "AI-generated profile pictures are a great way to create unique, high-quality images for LinkedIn and social media. This tutorial will walk you through training a LoRA (Low-Rank Adaptation) model on"
pubDate: 2025-02-17
tags: ["AI","Tutorial"]
---

AI-generated profile pictures are a great way to create unique, high-quality images for LinkedIn and social media. This tutorial will walk you through **training a LoRA (Low-Rank Adaptation) model on Replicate** and using it with a **LoRA-compatible model from Hugging Face** to generate custom images of yourself.  
  
**Quick Note** - This isn't free, but it's cheap. So far I've made over 30 images and it's cost me less than £3 with the training data costs. It will take you about an hour to go through the whole thing (including waiting for the training to complete). With that out the way, let's begin!

## **Step 1: Create a Model on Hugging Face and Get Your API Key**

Before training your LoRA, you need to **set up a model repository on Hugging Face** where your trained weights will be stored.

1\. **Sign up at** [**Hugging Face**](https://huggingface.co/) **and create an account.**

2\. Go to the **Model Hub** and click **“New Model”**.

![](/images/blog/how-to-train-a-lora-on-replicate-and-use-it-for-personalised-ai-generated-images/Screenshot-2025-02-17-at-12.20.06-1024x589.jpg)

New Model menu

3\. Name your model (e.g., yourname-lora) and set it to **public or private**. (Private is good but sometimes it can cause access issues, so start Private and if needed change to public temporarily)

![](/images/blog/how-to-train-a-lora-on-replicate-and-use-it-for-personalised-ai-generated-images/Screenshot-2025-02-17-at-12.20.29-1024x992.jpg)

Create new model window

4\. Go to **Settings > Access Tokens** and create a **new API token** with **write access**.

![](/images/blog/how-to-train-a-lora-on-replicate-and-use-it-for-personalised-ai-generated-images/Screenshot-2025-02-17-at-12.21.54-1024x749.jpg)

API Key Creation Window

5\. Copy down your Access Key - **IT WILL NEVER BE SHOWN AGAIN**

![](/images/blog/how-to-train-a-lora-on-replicate-and-use-it-for-personalised-ai-generated-images/Screenshot-2025-02-17-at-12.22.09-1024x626.jpg)

Final chance to get your access key!

If you forget to do this, or lose it before the next steps then you will need to redo step 4.

## **Step 2: Collect and Prepare Your Training Images**

To train a LoRA model effectively, you need a dataset of high-quality images of yourself. Follow these guidelines for the best results:

• **Use 10–20 images** showing different angles, expressions, and lighting conditions.

• Avoid blurry, low-resolution, or heavily filtered photos.

• Crop images so that your face is prominent in each one.

• Once you've selected your best photos turn them into a .zip folder.

💡 **Tip:** Vary your dataset. The more variation, the better the model generalises.

![](/images/blog/how-to-train-a-lora-on-replicate-and-use-it-for-personalised-ai-generated-images/Screenshot-2025-02-17-at-12.12.30-1-1024x935.jpg)

**Folder with potential training images**

**Step 3: Train Your LoRA on Replicate**

Now that you have a Hugging Face model set up, you can **train your LoRA model on Replicate**.

1\. **Sign up at** [**Replicate**](https://replicate.com/) **and go to the LoRA trainer.**

2\. Find a **LoRA training model**, such as sdxl-lora-trainer or [flux-dev-lora-trainer](https://replicate.com/ostris/flux-dev-lora-trainer/train)

3\. Configure training settings

• **Destination model**: Create a new one for this training and name it something relevant - again Public / Private depends on your preference

• **Input Images:** Upload your zip file with your images here.

• Choose your trigger word e.g YOURNAME (this will tell the Generative model to use the training data you've created)

![](/images/blog/how-to-train-a-lora-on-replicate-and-use-it-for-personalised-ai-generated-images/Screenshot-2025-02-17-at-12.25.52-976x1024.jpg)

Training model form

4\. **Connect your Hugging Face account:**

• **Training steps**: Start with **500–2000 steps**.

• **Lora rank**: Stick with default values unless you want to experiment.

• Paste your **Hugging Face API key** into Replicate when prompted.

• Select the **Hugging Face model** you created earlier as the output destination.

![](/images/blog/how-to-train-a-lora-on-replicate-and-use-it-for-personalised-ai-generated-images/Screenshot-2025-02-17-at-12.27.16-855x1024.jpg)

5\. Start the training process and wait for it to finish - it can take around 20 - 30 minutes. Put a cuppa on. Hopefully you will get this when done.

![](/images/blog/how-to-train-a-lora-on-replicate-and-use-it-for-personalised-ai-generated-images/Screenshot-2025-02-17-at-12.50.25-697x1024.jpg)

Screenshot

## **Step 4a: Load Your Trained LoRA into a Hugging Face Model** (EASY MODE IN STEP 4B)

Once your LoRA model is trained, it is automatically stored in the **Hugging Face model repository** you created earlier. Now, you can **load it into a LoRA-compatible model** for image generation.

1\. Open a **Google Colab notebook** or use a local setup with diffusers.

2\. Install the required libraries:

```
pip install diffusers transformers accelerate torch
```

3\. Load the base model and attach your LoRA:

```
from diffusers import StableDiffusionPipeline
import torch
model_id = "stabilityai/stable-diffusion-xl-base-1.0"  # Base model
lora_path = "your-huggingface-username/yourname-lora"  # Your trained LoRA
pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
pipe.load_lora_weights(lora_path)
pipe.to("cuda")  # Use GPU if available
```

![](/images/blog/how-to-train-a-lora-on-replicate-and-use-it-for-personalised-ai-generated-images/Screenshot-2025-02-17-at-13.03.35-1024x723.jpg)

Screenshot

4\. Generate an image:

```
prompt = "KEYWORD Professional headshot of a confident podcaster, realistic lighting, studio quality"
image = pipe(prompt).images[0]
image.show()
```

![](/images/blog/how-to-train-a-lora-on-replicate-and-use-it-for-personalised-ai-generated-images/podcast2-1024x796.webp)

## **Step 4b: Generate Images Using Flux-Dev-LoRA on Replicate**

Instead of using Hugging Face locally, you can generate images directly using [**Flux-Dev-LoRA on Replicate**](https://replicate.com/lucataco/flux-dev-lora). This is a little less daunting for my no code friends.

**Steps to Generate an Image**

1\. Go to [**Flux-Dev-LoRA**](https://replicate.com/lucataco/flux-dev-lora) on Replicate.

2\. Click **“Run”** and customise the following parameters:

• **Prompt**: Describe your desired image, e.g.,

“KEYWORD Professional headshot of a confident entrepreneur, realistic lighting, studio quality”

• **LoRA Model**: Enter the URL of your trained LoRA model on Hugging Face.

![](/images/blog/how-to-train-a-lora-on-replicate-and-use-it-for-personalised-ai-generated-images/Screenshot-2025-02-17-at-13.08.54-1024x154.jpg)

Screenshot

• **Style and Settings**: Adjust CFG scale, image resolution, and seed if needed.

3\. Click **“Submit”** and wait for the AI to generate an image.

4\. Once the image is ready, download it and review the results.

![](/images/blog/how-to-train-a-lora-on-replicate-and-use-it-for-personalised-ai-generated-images/Screenshot-2025-02-17-at-13.08.36-1024x508.jpg)

Screenshot

## **Step 5: Save and Use Your AI-Generated Images**

Now that your images are generated, you can save and edit them for social media.

• Save your favourite images and upscale them if needed.

• Use tools like Photoshop or Canva to adjust brightness, contrast, or background.

• Upload your AI-generated headshots to LinkedIn, Twitter, or other platforms.

![](/images/blog/how-to-train-a-lora-on-replicate-and-use-it-for-personalised-ai-generated-images/desk-1024x585.webp)

**Final Thoughts**

By training a LoRA on Replicate and hosting it on Hugging Face, you get full control over AI-generated images for **personal branding and marketing**.

Give it a try and share your AI-generated headshots with me.

**[If you like this and want to learn more DM me "LoRA" on Linkedin.](https://linkedin.com/in/pazbi)**

Also for you who made it all the way through. Here is my favourite blooper.

![](/images/blog/how-to-train-a-lora-on-replicate-and-use-it-for-personalised-ai-generated-images/networking-1024x796.webp)
