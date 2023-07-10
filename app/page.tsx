import PrimaryHeader from "@/components/Home/PrimaryHeader";
import SecondaryHeader from "@/components/Home/SecondaryHeader";
import "@/utils/styles/home.css";

export default function Home() {
    return (
        <div>
            <section className='h-screen'>
                <PrimaryHeader />
            </section>
            <section>
                <SecondaryHeader />
            </section>
        </div>
    );
}
