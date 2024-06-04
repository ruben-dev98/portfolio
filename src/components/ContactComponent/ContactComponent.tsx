const ContactComponent = () => {
    return (
        <section>
            <form action="" method="post">
                <input type="text" name="name" id="name" />
                <input type="text" name="email" id="email" />
                <input type="text" name="subject" id="subject" />
                <textarea name="message" id="message" cols="30" rows="10">
                    
                </textarea>
            </form>
        </section>
    );
}

export default ContactComponent;