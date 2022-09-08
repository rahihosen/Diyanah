<template>
    <div class="container mb-5">
        <div class="head-nav-all-page">
            <nav
                class="
                    navbar navbar-expand-sm
                    justify-content-center
                    nav-conatct-us
                "
            >
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FAQ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Team</a>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="helpline-num p-5">
            Feel free to contact us anytime at 16710.
        </div>
        <div class="helpline-num p-3">
            Or if you prefer, you can drop us a note using the form below.
            You'll always get a response from a real person — with a real name —
            within 48 hours.
        </div>

        <div class="contact-text fw-bold p-3">Contact Us</div>
        <form action="">
            <div class="name-input p-3">
                <input
                    class="form-control w-50 input-border-set"
                    type="text"
                    placeholder="Name"
                />
            </div>
            <div class="email-input p-3">
                <input
                    class="form-control w-50 input-border-set"
                    type="text"
                    placeholder="Email"
                />
            </div>
            <div class="num-input p-3">
                <input
                    class="form-control w-50 input-border-set"
                    type="text"
                    placeholder="Phone Number"
                />
            </div>
            <div class="msg-input p-3">
                <textarea
                    class="input-border-set message-box"
                    name="message"
                    id=""
                    cols="82"
                    rows="5"
                    placeholder="  Message"
                ></textarea>
            </div>
            <div class="sub-button">
                <input class="btn btn-danger" value="Submit" type="button" />
            </div>
        </form>
    </div>
</template>