import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import Heading1 from "../../components/Typography/Heading1";
import Heading2 from "../../components/Typography/Heading2";
import ProjectContextBox from "../../components/ProjectContextBox";
import ProjectTitle from "../../components/ProjectTitle";
import Body from "../../components/Typography/Body";

export default function TTRPGs() {
  return (
    <Stack alignItems={"center"}>
      <ProjectTitle
        title="Creating a Wind Energy Analysis Tool"
        info="Product Design Graduate @ BP - 2025"
        skills="End-to-End UI and UX Design, Front-End Engineering, User Testing"
      />

      {/* Context Box */}
      <ProjectContextBox>
        <Heading1>--- THE PROBLEM SPACE</Heading1>
        <Heading2>
          Prospective wind farm analysis takes a lot of time and is costly.
        </Heading2>
        <Body>
          Before bidding on a wind farm location, wind farm analysts will run
          simulations to understand the expected energy yield of a prospective
          farm, given a myriad of inputs. Previously, analysts were relying on
          third party services that were slow, expensive, and provided only
          partial functionality for their analyses. To test multiple scenarios
          meant repeating this slow process, losing time and money.
        </Body>

        <Heading1>--- THE TEAM</Heading1>
        <Body>
          I was the sole product designer in an Agile team consisting of a
          service designer in a supporting role (not fully allocated to the
          project), 4 front-end developers, 2 backend developers, a product
          manager, and a product owner (a wind analyst). I was responsible for
          determining the overall design direction of the project, based on the
          product owner’s initial vision, as well as producing the UI for each
          screen for the front-end developers to use directly.
        </Body>

        <Typography variant="body1" component="h3" align="left">
          <b>--- MY ROLE</b>{" "}
          <span style={{ paddingLeft: "1rem" }}>Primary product designer</span>
        </Typography>

        <Typography variant="body1" component="h3" align="left">
          <b>--- PROJECT TIME</b>{" "}
          <span style={{ paddingLeft: "1rem" }}>8 months</span>
        </Typography>
      </ProjectContextBox>

      <Stack
        direction="column"
        sx={{
          maxWidth: "800px",
          padding: "2rem",
          gap: "1.5rem",
          marginTop: "2rem",
        }}>
        <Heading1>--- KEY PAIN POINTS</Heading1>
        <Body>
          <b>Existing software is inefficient</b>
          <ul>
            <li>
              Multiple third-party tools are required to calculate results,
              which is time consuming and causes manual errors
            </li>
            <li>
              Commercially available software is costly, and may be outdated,
              potentially costing millions if estimations are even 1% off
            </li>
          </ul>

          <br />

          <b>No tools for early-stage projects</b>
          <ul>
            <li>
              Analysts are held back by how cumbersome setting up an analysis is
            </li>
            <li>
              Current tools do not allow for quick iterations, so it is not
              worth doing so early in a project, meaning losing out on valuable
              insights
            </li>
          </ul>

          <br />
          <b>Better models developed internally are not accessible</b>
          <ul>
            <li>
              Tools had been created internally but these were only accessible
              via code
            </li>
            <li>
              Many analysts are not comfortable coding, increasing potential for
              errors and time taken
            </li>
          </ul>
        </Body>
      </Stack>

      <Stack
        direction="column"
        sx={{
          maxWidth: "800px",
          padding: "2rem",
          gap: "1.5rem",
          marginTop: "2rem",
        }}>
        <Heading1>--- KEY DECISION #1</Heading1>
        <Heading2>Organising SME’s vision</Heading2>
        <Body>
          This project was based on the vision from a wind analyst lead - the
          broad goal was defined: create a UI for analysts to run energy yield
          analyses more efficiently, but the specific approach was not. I
          interviewed 3 wind analysts to investigate current ways of working to
          better understand the data and process required. The wind analyst lead
          had also created some initial wireframes of his vision, which I
          organised and analysed to break down the central flow.
          <br />
          I re-prioritized and re-worked the main set up flow for an analysis,
          given my insights form interviews and the inputs required from the
          initial (incomplete) wireframes, breaking these down into distinct
          steps with inputs/outputs for a clear direction for the platform.
          <br />
          From this, I created multiple low-fidelity wireframes on Mural, to
          quickly explore input configurations and define functionality before
          spending time on higher fidelity design elements. As the set up
          process is so input-dense, this was important. I regularly iterated on
          these with the wind analysis team, testing especially for input
          correctness and that the ordering of steps matched the mental model of
          the usual analysis setup.
        </Body>
      </Stack>

      <Stack
        direction="column"
        sx={{
          maxWidth: "800px",
          padding: "2rem",
          gap: "1.5rem",
          marginTop: "2rem",
        }}>
        <Heading1>--- KEY DECISION #2</Heading1>
        <Heading2>Constrained timeline</Heading2>
        <Body>
          Three months into joining the project, our timelines were unexpectedly
          shortened, due to business needs, from 12 to 6 months to deliver a UI
          minimum viable product (MVP).
          <br />
          This required a re-calibration of what would be included in the final
          deliverable:
          <ul>
            <li>
              I re-prioritised features through discussions with all
              stakeholders (wind analysts, software engineers, and project
              manager) to focus on an MVP-level solution
            </li>
            <li>
              My experience as a software engineer helped me factor in
              implementation feasibility into this prioritisation
            </li>
          </ul>
          <br />I leveraged my low-fidelity prototyping approach to quickly
          reconfigure to the MVP flow, and only designed a few key screens as
          high-fidelity prototypes to increase handover speed. These key screens
          acted as a style guide for developers, while the low fidelity screens
          included all necessary functional information, allowing for an
          efficient transition to development.
        </Body>
      </Stack>

      <Stack
        direction="column"
        sx={{
          maxWidth: "800px",
          padding: "2rem",
          gap: "1.5rem",
          marginTop: "2rem",
        }}>
        <Heading1>--- KEY DECISION #3</Heading1>
        <Heading2>Balancing usability and code-ability</Heading2>
        <Body>
          To keep design and engineering aligned, I set up twice-weekly syncs
          with the development team to review implemented UI and resolve design
          questions arising from the wireframes. This collaboration ensured
          consistency and allowed us to address usability issues early and
          quickly.
          <br />
          Even under a tight deadline, I attempted to balance usability with
          delivering key functionality, advocating for key usability
          improvements to be addressed. For instance, early user testing
          revealed confusion around task progress - as the flow is input-heavy -
          leading me to prioritise a clear step-progress indicator as a key
          feature to be implemented.
          <br />I also contributed to front-end implementation to streamline
          handoff and maintain delivery speed. By having me focus on styling
          aspects of the UI, the development team had more time to focus on
          resolving bugs and functionality issues.
        </Body>
      </Stack>

      <Stack
        direction="column"
        sx={{
          maxWidth: "800px",
          padding: "2rem",
          gap: "1.5rem",
          marginTop: "2rem",
        }}>
        <Heading1>--- OUTCOMES</Heading1>
        <Heading2>Analysis time down from weeks to hours</Heading2>
        <Body>
          Through a combination of algorithm optimisation and the new flow, we
          cut the time to run an analysis down from weeks to hours. A large part
          of this was that the new flow allows analysts to run multiple
          scenarios from a combination of inputs that can be set up
          simultaneously. By parallelising the process of building and running
          multiple scenarios, analysts reduced the back and forth between tools,
          and can now run faster runs, more frequently.
          <br />
          This proved so useful analysts asked us for permission to use the tool
          before it was fully delivered to begin running experimental scenarios.
        </Body>

        <Heading2>Cost savings</Heading2>
        <Body>
          This rise in efficiency also increases the opportunities for frequent
          experimentation with different scenarios, potentially leading to
          estimations with higher certainty and better bids, as well as allowing
          for better early-stage project explorations.
        </Body>

        <Heading2>A key handover in a Joint Venture</Heading2>
        <Body>
          This platform was a key component of the Jera Nex BP Joint Venture.
        </Body>
      </Stack>

      <Stack
        direction="column"
        sx={{
          maxWidth: "800px",
          padding: "2rem",
          gap: "1.5rem",
          marginTop: "2rem",
        }}>
        <Heading1>--- LEARNING</Heading1>
        <Heading2>Balancing usability and code-ability</Heading2>
        <Body>
          This project was instrumental for growing my niche of skills as a
          bridge between design and engineering. Because of the 50% shortening
          of the delivery timeline, development efficiency was key. Having good
          knowledge of the feasibility of coding specific design elements
        </Body>

        <Heading2>Syncing is success</Heading2>
        <Body>
          In tight-timeline projects like these, it is essential that the
          developer team and design team are on the same page. The regular syncs
          that I suggested allowed us to discuss any roadblocks as they were
          being designed, rather than bottlenecking these at handoff of all
          screens.
        </Body>

        <Heading2>Low-fidelity is flexible</Heading2>
        <Body>
          Using low-fidelity wireframes allowed me to iterate very quickly
          through possible flows, which was crucial in an information-dense
          product like this. Creating future-proof mockups by first working in
          low-fidelity wireframes is useful for quickly pivoting when priorities
          change. This also allows for more confident future scaling, as next
          levels are planned out.
        </Body>
      </Stack>

      <Stack
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
      </Stack>
    </Stack>
  );
}
