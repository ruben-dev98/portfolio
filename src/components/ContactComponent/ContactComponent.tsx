const ContactComponent = () => {
    return (
        <section>
            <form action="#" onSubmit={(event) => event.preventDefault} method="post">
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="subject">Asunto</label>
                    <input type="text" name="subject" id="subject" />
                </div>
                <div>
                    <label htmlFor="message">Mensaje</label>
                    <textarea name="message" id="message" cols="30" rows="10">
                    </textarea>
                </div>
            </form>
        </section>
    );
}

export default ContactComponent;