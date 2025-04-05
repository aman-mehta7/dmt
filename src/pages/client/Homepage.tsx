
import {
  // Activities,
  ClientContainer,
  Download,
  EventCard,
  Hero,
  PlaceCard,
  Section,
} from "../../components";
import { useAppSelector } from "../../hooks/useTypedSelectors";
import { RootAppState } from "../../redux/store";
import StaysCard from "../../components/client/shared/Cards/StaysCard";

const Homepage = () => {
  const { places } = useAppSelector((state: RootAppState) => state.places);
  const { events } = useAppSelector((state: RootAppState) => state.events);

  return (
    <div className="overflow-hidden">
      <Hero />
      {/* <Activities data={places} /> */}
      <Section className="mt-16" >
        <ClientContainer>
          <h2
            className={`text-center text-dark-blue text-3xl md:text-5xl font-bold leading-tight`}
          >
            Featured
          </h2>

           {/* // card for stays details page  */}
          <StaysCard />

          <div
            className={`grid gap-8 grid-flow-rows grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-10`}
          >
            {places.map((item, i) => (
              <PlaceCard data={item} key={i} />
            ))}
          </div>
        </ClientContainer>
      </Section>
      <Download />
      <Section>
        <ClientContainer>
          <h2
            className={`text-center text-dark-blue text-3xl md:text-5xl font-bold leading-tight`}
          >
            Upcoming Events
          </h2>
          <div
            className={`grid gap-8 grid-flow-rows grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-10`}
          >
            {events.map((item, i) => (
              <EventCard data={item} key={i} />
            ))}
          </div>
        </ClientContainer>
      </Section>
    </div>
  );
};

export default Homepage;
