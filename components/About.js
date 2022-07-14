import { Container } from '@components/Container'


export function About() {
    return (
        <section
        id="about"
        aria-label="Pricing"
        className="bg-white py-4 sm:py-4"
      >
       <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-gray-300 sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <span className="relative">About Us</span>
            </span>{' '}
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Custom Professional Screen Printing is available Mon-Fri from 9am to 5pm. All orders can normally be filled within 10 business days of the final artwork approval/order.

            Shawn Hiestand, Owner and Operator of Hairy Frog Grafix, was born and raised in Nevada, MO. Shawn grew up with an entrepreneurial soul, and has always had the desire to do be different, be independent, and make a mark on life. After graduating with honors from NHS in 1991, she got married and started a family, and put her dreams on hold to concentrate on her young children. In 1999, Shawn's desire to become a designer came to light when she received her Bachelor's of Science in Textiles, Clothing & Design, from the University of Nebraska at Lincoln.

            After working primarily as a clothing and jewelry designer in both Springfield and Nevada, MO, she purchased some equipment in August of 2006, and founded Hairy Frog Grafix, which was operated out of her home. When Shawn became a single mother in June of 2008, she made the command decision to operate Hairy Frog on her own, and moved the business to Nevada.

            HFG is currently in a 1250 sq foot building with a separate office and print room. Operating with 2 large shirt presses, a hat press and a vinyl press; Catering to schools, businesses, corporations and large civic organizations as well as groups of any size; HFG prints an average of 300-400 shirts per week.
          </p>
        </div>
      </Container>
    </section>
    )
}