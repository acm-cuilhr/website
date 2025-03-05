import ContributorSection from "../components/ContributorSection";
import ContributorsHeroSection from "../components/ContributorsHeroSection";
import FooterSection from "../components/FooterSection";

export default function Contributors() {
	return (
		<>
			{/* HERO SECTION */}
			<ContributorsHeroSection />

			{/* CONTRIBUTORS SECTION */}
			<ContributorSection />

			{/* FOOTER SECTION */}
			<FooterSection />
		</>
	);
}
