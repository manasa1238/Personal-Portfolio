/* =====================================================
   PROFILE PHOTO UPLOAD
===================================================== */

const profileUpload = document.getElementById("profileUpload");
const profilePreview = document.getElementById("profilePreview");

profileUpload.addEventListener("change", function (event) {

    const file = event.target.files[0];

    if (!file) {
        return;
    }

    if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        return;
    }

    const imageURL = URL.createObjectURL(file);

    profilePreview.src = imageURL;

});
/* =====================================================
   CERTIFICATE UPLOAD
===================================================== */

const certificateUpload =
    document.getElementById("certificateUpload");

const certificateContainer =
    document.getElementById("certificateContainer");


let certificateCount = 0;


certificateUpload.addEventListener("change", function (event) {

    const files = event.target.files;

    if (!files || files.length === 0) {
        return;
    }


    /* Process selected certificates */

    Array.from(files).forEach(function (file) {

        /* Check image */

        if (!file.type.startsWith("image/")) {

            alert(
                file.name +
                " is not an image file."
            );

            return;
        }


        certificateCount++;


        /* Create temporary URL */

        const imageURL =
            URL.createObjectURL(file);


        /* =================================================
           CREATE CARD
        ================================================= */

        const certificateCard =
            document.createElement("div");

        certificateCard.className =
            "certificate-card";


        /* =================================================
           CREATE IMAGE CONTAINER
        ================================================= */

        const imageContainer =
            document.createElement("div");

        imageContainer.className =
            "certificate-image-container";


        /* =================================================
           CREATE IMAGE
        ================================================= */

        const certificateImage =
            document.createElement("img");

        certificateImage.src = imageURL;

        certificateImage.alt =
            "Certificate " +
            certificateCount;

        certificateImage.className =
            "certificate-image";


        /* =================================================
           ADD IMAGE TO CONTAINER
        ================================================= */

        imageContainer.appendChild(
            certificateImage
        );


        /* =================================================
           CREATE CONTENT
        ================================================= */

        const certificateContent =
            document.createElement("div");

        certificateContent.className =
            "certificate-content";


        /* Certificate number */

        const number =
            document.createElement("span");

        number.className =
            "certificate-number";

        number.textContent =
            "Certificate " +
            certificateCount;


        /* Certificate title */

        const title =
            document.createElement("h3");

        title.textContent =
            file.name
                .replace(/\.[^/.]+$/, "")
                .replace(/[-_]/g, " ");


        /* Organization */

        const organization =
            document.createElement("h4");

        organization.innerHTML =
            '<i class="fas fa-award"></i> Certificate Achievement';


        /* Description */

        const description =
            document.createElement("p");

        description.textContent =
            "This certificate demonstrates my learning, skills and successful completion of the respective course or program.";


        /* =================================================
           VIEW FULL CERTIFICATE BUTTON
        ================================================= */

        const viewButton =
            document.createElement("a");

        viewButton.href =
            imageURL;

        viewButton.target =
            "_blank";

        viewButton.rel =
            "noopener noreferrer";

        viewButton.className =
            "view-certificate-btn";

        viewButton.innerHTML =
            '<i class="fas fa-eye"></i> View Full Certificate';


        /* =================================================
           ADD CONTENT
        ================================================= */

        certificateContent.appendChild(number);

        certificateContent.appendChild(title);

        certificateContent.appendChild(organization);

        certificateContent.appendChild(description);

        certificateContent.appendChild(viewButton);


        /* =================================================
           ADD EVERYTHING TO CARD
        ================================================= */

        certificateCard.appendChild(
            imageContainer
        );

        certificateCard.appendChild(
            certificateContent
        );


        /* =================================================
           ADD CARD TO PAGE
        ================================================= */

        certificateContainer.appendChild(
            certificateCard
        );

    });


    /* Reset input */

    certificateUpload.value = "";

});

});
function downloadResume() {

    const resume = document.getElementById("resume-content");

    const options = {
        margin: 10,

        filename: "Manasa_Gunji_Resume.pdf",

        image: {
            type: "jpeg",
            quality: 0.98
        },

        html2canvas: {
            scale: 2,
            useCORS: true
        },

        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait"
        }
    };

    html2pdf()
        .set(options)
        .from(resume)
        .save();
}