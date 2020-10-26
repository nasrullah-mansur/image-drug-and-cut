# image-drug-and-cut-using-javascript

Required Plugin and Library:-
1. <a target="_blank" href="https://code.jquery.com/jquery/">jQuery</a>
2. <a target="_blank" href="https://foliotek.github.io/Croppie/">Croppie</a>


## Required Files:-
```html
<link rel="stylesheet" href="css/croppie.css">

<script src="js/croppie.min.js"></script>
<script src="js/custom.js"></script> 
```

## Usage 
just copy the code inside the custom.js file and change icon class name as you wish. 


## HTML Code
```html
<form>
    <div class="container py-5">
        <!-- Image crop start -->
        <div class="img-content">
            <div class="img-croppie upload-demo">
                <div id="upload-demo">
                    <div class="action-btns">
                        <a href="javascript:void(0)" id="crop-btn" class="btn btn-primary text-capitalize upload-result">use photo</a>
                        <a href="javascript:void(0)" id="remove-img" class="btn btn-danger text-capitalize">remove photo</a>
                    </div>
                </div>
                <div class="actions">
                    <label for="upload">Click To Upload Your Photo</label>
                    <input type="file" id="upload" accept="image/*">
                </div>
                <div class="output-img">
                    <img src="" id="output">
                    <a href="javascript:void(0)" class="btn btn-warning" id="try-again">Try again</a>
                </div>  
            </div> 
        </div>
        <!-- Image crop end -->
    </div>

    <!-- Get image base64 value bi ID -->
    <input type="hidden" name="image" id="cropped-img">
</form>
```

Thank you 
<a href="divinecoder.com">Nasrullah Mansur</a>
