import React from "react";
import { Stack } from "@mui/material";
import Heading1 from "../../components/Typography/Heading1";
import Heading2 from "../../components/Typography/Heading2";
import ProjectTitle from "../../components/ProjectTitle";
import Body from "../../components/Typography/Body";
import ProjectBox from "../../components/ProjectBox";
import Bullet from "../../components/Bullet";

export default function TTRPGs() {
  return (
    <Stack alignItems={"left"}>
      <ProjectTitle
        title="Creating a Wind Energy Analysis Tool"
        info="Product Design Graduate @ BP - 2025"
        skills={[
          "End-to-End UI and UX Design",
          "Front-End Engineering",
          "User Testing",
        ]}
      />

      <Heading1>Summary</Heading1>

      <Stack
        direction="row"
        alignItems="flex-start"
        spacing={20}
        sx={{ padding: "1rem" }}>
        <Stack direction="column" sx={{ width: "100%" }}>
          <Heading2>Mission</Heading2>
          <Body>
            Wind analysts must run complex simulations to estimate the energy
            yield of potential wind farm sites. These simulations inform
            multi-million-pound bidding decisions — yet existing tools were
            slow, fragmented across multiple platforms, and prohibitively
            expensive. Running even one scenario could take days or weeks.
            Iterating on several scenarios early in a project was nearly
            impossible. Across eight months, I led the end-to-end design of an
            internal wind energy analysis tool that dramatically reduced
            analysis time while increasing efficiency, accuracy, and
            accessibility for non-technical analysts.
          </Body>

          <Heading2>My Contribution</Heading2>
          <Stack direction="column" spacing={1}>
            <Body>
              I was the sole product designer embedded in an Agile product team
              of 4 front-end engineers, 2 backend engineers, a PM, and a product
              owner (a senior wind analyst). A service designer supported the
              project part-time.
              <br />
              <br />
              My key responsibilities included:
            </Body>
            <Bullet>Defining the product’s UX direction</Bullet>
            <Bullet>
              Conducting user interviews with subject-matter experts (wind
              analysts)
            </Bullet>
            <Bullet>
              Designing all user flows, wireframes, and UI screens
            </Bullet>
            <Bullet>Prioritising features after a major timeline cut</Bullet>
            <Bullet>
              Supporting front-end development to accelerate implementation
            </Bullet>
            <Bullet>Running usability tests and integrating feedback</Bullet>
          </Stack>
        </Stack>

        <ProjectBox>
          <Stack spacing={4}>
            <Stack>
              <Heading2>Timeframe</Heading2>
              <Body>8 months</Body>
            </Stack>

            <Stack>
              <Heading2>Skills</Heading2>
              <Body>
                End-to-End UI and UX Design, Front-End Engineering, User Testing
              </Body>
            </Stack>
          </Stack>
        </ProjectBox>
      </Stack>

      <Stack
        direction="column"
        sx={{
          padding: "2rem",
          gap: "1.5rem",
          marginTop: "2rem",
        }}>
        <Heading1>Process</Heading1>
        <Heading2>Key pain points</Heading2>

        <Stack direction="row" width="100%" alignItems="center" spacing={4}>
          <ProjectBox isSecondary>
            Existing software is inefficient
            <Body>
              Multiple third-party tools are required to calculate results,
              which is time consuming and causes manual errors. Commercially
              available software is costly, and may be outdated, potentially
              costing millions if estimations are even 1% off
            </Body>
          </ProjectBox>

          <ProjectBox isSecondary>
            No tools for early-stage projects
            <Body>
              Analysts are held back by how cumbersome setting up an analysis
              is. Current tools do not allow for quick iterations, so it is not
              worth doing so early in a project, meaning losing out on valuable
              insights.
            </Body>
          </ProjectBox>

          <ProjectBox isSecondary>
            Better in-house models not accessible
            <Body>
              Tools had been created internally but these were only accessible
              via code which many analysts were not proficient in, increasing
              potential for errors and time taken.
            </Body>
          </ProjectBox>
        </Stack>

        <Heading2>Organising SME’s vision</Heading2>
        <Body sx={{ width: "60%" }}>
          This project was based on the vision from a wind analyst lead - the
          broad goal was defined, but the specific approach was not. I
          interviewed 3 wind analysts to investigate current ways of working to
          better understand the data and process required. The wind analyst lead
          had also created some initial wireframes of his vision, which I
          organised and analysed to break down the central flow.
          <br />
          <br />I re-prioritized and re-worked the main set up flow for an
          analysis, given my insights form interviews and the inputs required
          from the initial (incomplete) wireframes, breaking these down into
          distinct steps with inputs/outputs for a clear direction for the
          platform.
        </Body>

        <Stack width={"100%"} alignItems="center" marginTop={"1rem"}>
          <img width={"900px"} src="/Wind/Flows.png" />
        </Stack>

        <Body sx={{ width: "60%" }}>
          As the set up process was so input-dense I created multiple
          low-fidelity wireframes on Mural first, to quickly explore input
          configurations and define functionality before spending time on higher
          fidelity design elements. I regularly iterated on these with the wind
          analysis team, testing especially for input correctness and that the
          ordering of steps matched the mental model of the usual analysis
          setup.
        </Body>

        <Stack width={"100%"} alignItems="center" marginTop={"1rem"}>
          <img width={"900px"} src="/Wind/Wireframes.png" />
        </Stack>

        <Heading2>Responding to a 50% timeline cut</Heading2>
        <Body sx={{ width: "60%" }}>
          Three months into the project, the delivery deadline was unexpectedly
          halved from 12 to 6 months due to business needs.
          <br />
          <br />
          This required a re-calibration of what would be included in the final
          deliverable, so I led an urgent reprioritisation effort:
        </Body>

        <Stack direction="column" spacing={1} width={"60%"}>
          <Bullet>
            I collaborated with all stakeholders (wind analysts, software
            engineers, and project manager) to redefine the UI scope of the MVP
          </Bullet>
          <Bullet>
            Bringing my experience as an engineer helped me factor in technical
            feasibility into this prioritisation
          </Bullet>
          <Bullet>
            I restructured the flow of the MVP to allow for a basic analysis
            setup while documenting room for expandability in the future
          </Bullet>
        </Stack>

        <Stack width={"100%"} alignItems="center" marginTop={"1rem"}>
          <img width={"900px"} src="/Wind/ReprioritisedFlows.png" />
        </Stack>

        <Body sx={{ width: "60%" }}>
          To accelerate implementation I leveraged my low-fidelity prototyping
          approach to quickly reconfigure to the MVP flow and designed only a
          few key high fidelity screens. These acted as a style guide for
          developers, while the low fidelity screens included detailed
          annotations on interaction logic, allowing for an efficient handover
          to development.
        </Body>

        <Body sx={{ width: "60%", marginTop: "1rem" }}>
          A close collaboration between design and engineering was necessary
          with this shortened timeline and given the complexity of the use case.
        </Body>
        <Stack direction="column" spacing={1} width={"60%"} marginTop={"1rem"}>
          <Bullet>
            Set up twice-weekly design–engineering syncs, which significantly
            reduced rework and prevented misinterpretation of wireframes.
          </Bullet>
          <Bullet>
            Advocated for for essential usability improvements found in early
            user testing, such as prioritising a clear step-progress indicator -
            as the flow was so input-heavy, users often became lost with their
            progress.
          </Bullet>
          <Bullet>
            I also contributed to front-end implementation to maintain delivery
            speed. By having me focus on styling aspects of the UI, the
            development team had more time to focus on resolving bugs and
            functionality issues.
          </Bullet>
        </Stack>
      </Stack>

      <Stack
        direction="column"
        sx={{
          padding: "2rem",
          gap: "1.5rem",
          marginTop: "2rem",
        }}>
        <Heading1>Outcomes</Heading1>
        <Heading2>Analysis time down from weeks to hours</Heading2>
        <Body sx={{ width: "60%" }}>
          Through a combination of algorithm optimisation and the new flow, we
          cut the time to run an analysis down from weeks to hours. A large part
          of this was that the new flow allows analysts to run multiple
          scenarios from a combination of inputs that can be set up
          simultaneously. By parallelising the process of building and running
          multiple scenarios, analysts reduced the back and forth between tools,
          and can now run faster runs, more frequently.
          <br />
          <br />
          This proved so useful analysts asked us for permission to use the tool
          before it was fully delivered to begin running experimental scenarios.
        </Body>

        <Heading2>Cost savings</Heading2>
        <Body sx={{ width: "60%" }}>
          This rise in efficiency also increases the opportunities for frequent
          experimentation with different scenarios, potentially leading to
          estimations with higher certainty and better bids, as well as allowing
          for better early-stage project explorations.
        </Body>

        <Heading2>A key deliverable in a Joint Venture</Heading2>
        <Body sx={{ width: "60%" }}>
          The platform became a major component of the JERA Nex BP Joint
          Venture, supporting strategic wind energy investment decisions.
        </Body>
      </Stack>

      <Stack
        direction="column"
        sx={{
          padding: "2rem",
          gap: "1.5rem",
          marginTop: "2rem",
        }}>
        <Heading1>Learning</Heading1>
        <Heading2>Balancing usability and code-ability</Heading2>
        <Body sx={{ width: "60%" }}>
          This project was instrumental for growing my niche of skills as a
          bridge between design and engineering. Because of the 50% shortening
          of the delivery timeline, development efficiency was key. Having good
          knowledge of the feasibility of coding specific design elements
        </Body>

        <Heading2>Syncing is success</Heading2>
        <Body sx={{ width: "60%" }}>
          In tight-timeline projects like these, it is essential that the
          developer team and design team are on the same page. The regular syncs
          that I suggested allowed us to discuss any roadblocks as they were
          being designed, rather than bottlenecking these at handoff of all
          screens.
        </Body>

        <Heading2>Low-fidelity is flexible</Heading2>
        <Body sx={{ width: "60%" }}>
          Using low-fidelity wireframes allowed me to iterate very quickly
          through possible flows, which was crucial in an information-dense
          product like this. Creating future-proof mockups by first working in
          low-fidelity wireframes is useful for quickly pivoting when priorities
          change. This also allows for more confident future scaling, as next
          levels are planned out.
        </Body>
      </Stack>

      {/* <Stack
        direction="column"
        sx={{
          maxWidth: "800px",
          padding: "2rem",
          gap: "1.5rem",
          marginTop: "2rem",
        }}>
        <Heading1>--- FEEDBACK</Heading1>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ paddingTop: "1rem" }}>
          <Body>
            “I want to recognise you for the incredible work you have done on
            the energy hub. It's always been a big and ambitious project and we
            have delivered a really valuable product. This wouldn't have
            happened without your effort, motivation, team work and enthusiasm!
            You have delivered great design work as well as being hands on with
            the UI development. This combination (design & dev) and close
            collaboration with the other devs and the business has led to being
            able to build a great UI in such a short time.”
          </Body>

          <Body>
            “Your tireless work bridging the development and business teams was
            truly remarkable. No matter how many Back-and-Forths there were, you
            never showed fatigue and always stepped up. You took on the most
            challenging styling tasks and helped in the development of an
            intuitive UI for the Wind Farm Design Tool. [...] You worked
            smoothly with UI and API developers and listened to their
            suggestions. You also tried to set up synergy between the APIs to be
            developed for each action on the UI page. Despite being new to this
            domain, you brought a fresh pair of eyes and a unique perspective
            that was invaluable in creating a well-designed interface”
          </Body>

          <Body>
            “I really appreciate the way you connect with the stakeholders,
            understand their problems and look for good design solutions. There
            have been many occasions where your discussions and challenges to
            the business have led to an improved user experience. [...] I also
            really appreciate your willingness to jump into things outside of
            the design domain. You have done hands on UI development and managed
            a large chunk of the UI activities / backlog. This versatility has
            made a huge difference to being able to finish the product in time.”
          </Body>
        </Stack>
      </Stack> */}
    </Stack>
  );
}
