import React from "react";
import { Stack, Button, Grid2 } from "@mui/material";
import Body from "../../components/Typography/Body";
import Heading1 from "../../components/Typography/Heading1";
import Heading2 from "../../components/Typography/Heading2";
import ProjectTitle from "../../components/ProjectTitle";
import ProjectBox from "../../components/ProjectBox";
import Bullet from "../../components/Bullet";

export default function Verifone() {
  return (
    <Stack alignItems={"left"}>
      <ProjectTitle
        title="Verifone: Building Trust in the Second Hand Phone Market"
        info="CHI 2024 Student Design Competition Finalist"
        skills={["User Research", "UX Design", "Academic Writing"]}
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
            As part of a university project aligned with UN SDG 12: Responsible
            Consumption and Production, we explored the information gap limiting
            sustainable adoption of second-hand phones. We found there are
            widespread concerns around the quality, security, and condition of
            second hand phones preventing buying - even though this data is
            available, re-selling platforms were not surfacing it effectively.
            <br />
            <br />
            To address this, we created a conceptual prototype, Verifone, a
            selling platform aimed at building trust in second-hand tech.
          </Body>

          <Heading2>My Contribution</Heading2>
          <Stack direction="column" spacing={1}>
            <Body>
              Working within a group of 5 designers, I was responsible for:
            </Body>
            <Bullet>Designing a user attitudes survey</Bullet>
            <Bullet>
              Reviewing market reports to identify key pain points
            </Bullet>
            <Bullet>
              Co-leading mid-fidelity prototype design and usability testing
            </Bullet>
            <Bullet>
              Co-authoring an extended abstract for the ACM CHI 2024 Student
              Design Competition, where our project was selected as a finalist
            </Bullet>
            <Bullet>
              Co-presenting a poster of our work to an international HCI
              audience at CHI 2024
            </Bullet>
          </Stack>
        </Stack>

        <ProjectBox>
          <Stack spacing={4}>
            <Stack>
              <Heading2>Timeframe</Heading2>
              <Body>2 months</Body>
            </Stack>

            <Stack>
              <Heading2>Skills</Heading2>
              <Body>Survey design, UX design, Academic writing</Body>
            </Stack>

            <Stack>
              <Heading2>Impact</Heading2>
              <Body>CHI 2024 Student Design Competition Finalist</Body>
            </Stack>

            <Button variant="contained" color="primary" href="">
              Go to paper in acm digital library
            </Button>
          </Stack>
        </ProjectBox>
      </Stack>

      {/* Section */}
      <Stack
        direction="column"
        sx={{
          padding: "2rem",
          gap: "1.5rem",
          marginTop: "2rem",
        }}>
        <Heading1>Process</Heading1>

        <Stack direction="row" spacing={12}>
          <Stack direction="column">
            <Heading2>Pinpointing the problem</Heading2>
            <Body>
              We first needed to understand <u>why</u> the second-hand phone
              market was not thriving. To do this, we triangulated insights from
              multiple sources:
            </Body>

            <ul>
              <li>
                <b>Attitudinal user survey</b> → Lower cost is the primary
                motivator for buying second-hand, but many respondents still
                stored unused devices at home, showing an intention-action gap
                for adding them into the market.
              </li>
              <li>
                <b>Market reports</b> → A 2023 Hubbub study on e-waste revealed
                that Gen Z consumers trust new products more than used ones,
                despite strong environmental awareness, pointing to lack of
                trust.
              </li>
              <li>
                <b>Competitive analysis</b> → Looking at the second-hand car
                (Carfax) and the second-hand fashion markets (3D Shot by
                Cappacity), the quality appraisal aspect of buying was
                emphasised - providing detailed reports and visual transparency
                to build confidence.
              </li>
            </ul>
            <Body>
              We plotted possible problem statements on a matrix against user
              impact and environmental impact, selecting the one with the
              highest combined impact, and created a persona to explore it more
              deeply.
            </Body>
          </Stack>

          <ProjectBox>
            <Heading2>Problem Statement</Heading2>
            <Body>
              <i>
                “I want to buy a second-hand phone because it is cost-efficient,
                but I do not trust the process”
              </i>
            </Body>

            <Body>
              It tackles the second-hand phone market from the
              <b> buyers’ perspective</b>, as there is an abundance of selling
              platforms, yet a shortage in consumers.
            </Body>
          </ProjectBox>
        </Stack>

        <img src="/Verifone/ProbStatements.jpg" />

        <Heading2>Success Criteria</Heading2>
        <Body sx={{ width: "60%" }}>
          The persona we created was useful as a way to guide the creation of
          the three success metrics a solution would need to fulfil to address
          the problem statement:
        </Body>

        <Stack direction="row" width="100%" alignItems="center">
          <ProjectBox isSecondary>
            Accessible
            <Body>
              I want to easily access this information as part of the purchasing
              journey
            </Body>
          </ProjectBox>

          <ProjectBox isSecondary>
            Reliable
            <Body>
              I want to feel that the information presented to me is unbiased
              and accurate
            </Body>
          </ProjectBox>

          <ProjectBox isSecondary>
            Clear
            <Body>
              I want to fully understand the condition of the specific phone I
              am purchasing
            </Body>
          </ProjectBox>
        </Stack>

        <Stack direction="column" width="60%">
          <Heading2>Iteration: Affective vs. Functional Prototypes</Heading2>
          <Body>
            We decided to design a second-hand phone selling platform that
            prioritised transparency on the phone condition for buyers. Many of
            our early ideations had to do with making the details about the
            phone quality transparent, but there was a split between the way
            this information was presented - one in a very factual and formal
            way, and another using emotional and anthropomorphic aspects to
            encourage users’ to ‘bond’ with prospective phones.
          </Body>

          <Body>
            We built both as mid-fidelity Figma prototypes and conducted six
            randomized think-aloud usability tests, asking participants to rate
            perceived trust (1–7 Likert scale). We found:
          </Body>

          <ul>
            <li>
              The <b>functional tone</b> version on average was considered more
              trustworthy, with users highlighting the clean aesthetics being
              more congruent with the context.
            </li>

            <li>
              The <b>affective tone version</b> created stronger emotional
              resonance and perceived uniqueness which encouraged buying.
            </li>
          </ul>

          <Body>
            Our final iteration combined both, maintaining the professional tone
            of the functional version while subtly integrating humanised
            language for warmth and personality.
          </Body>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Stack direction="column">
            <img src="/Verifone/Ideation.png" width="100%" />
            My early ideation sketches
          </Stack>

          <Stack direction="column">
            <img src="/Verifone/Prototypes.svg" />
            The main differences were with copy and typography, while the
            overall structure and features remained the same. The affective
            prototype used an anthropomorphic tone (“Jerry is looking for a new
            home!”) and a handwritten-style font, while the functional prototype
            followed design patterns and the copy tone of large tech companies
            like Apple.
          </Stack>
        </Stack>
      </Stack>

      {/* Section */}
      <Stack
        direction="column"
        sx={{
          padding: "2rem",
          gap: "1.5rem",
          marginTop: "2rem",
        }}>
        <Heading1>Outcomes</Heading1>

        <Heading2>Final prototype</Heading2>
        <Body sx={{ width: "60%" }}>
          We combined both delivery methods to produce a final mid-fidelity
          prototype on Figma. Keeping the familiarity and clean aesthetics of
          the functional prototype with smaller touches in copy inspired by the
          affective prototype, to add a sense of personality.
        </Body>

        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <img
              width={"600px"}
              height={"364px"}
              src="/Verifone/Prototype-Home.png"
            />
            Landing page has an interactive 3D model of the phone to immediately
            explore cosmetic imperfections and phone model.
          </Grid2>
          <Grid2 size={6}>
            <img
              width={"600px"}
              height={"364px"}
              src="/Verifone/Prototype-Dashboard.png"
            />
            The overview page synthesises key aspects of phone health (battery
            health rating, lifetime, repair history, and overall condition) in
            an accessible way
          </Grid2>
          <Grid2 size={6}>
            <img
              width={"600px"}
              height={"364px"}
              src="/Verifone/Prototype-ExplodedDiagram.png"
            />
            An interactive 3D ‘exploded’ model of the phone allows for in-depth
            exploration of component health, for more technical users.
          </Grid2>
          <Grid2 size={6}>
            <img
              width={"600px"}
              height={"364px"}
              src="/Verifone/Prototype-CameraTest.png"
            />
            Pages that simulate the quality of the camera and microphone of the
            specific phone, so users can have increased transparency on the
            features that matter to them.
          </Grid2>
        </Grid2>

        <Heading2>Presenting at CHI 2024</Heading2>
        <Stack sx={{ width: "60%" }} direction="column" spacing={2}>
          <Body>
            Our work was selected as a finalist in the Student Design
            Competition for the ACM’s CHI 2024 conference - selected for high
            potential impact and throrough execution. We had the opportunity to
            present a poster of our work to leading researchers in the HCI
            field. I still regularly attend CHI conferences to follow the latest
            design discussions happening in the field.
          </Body>

          <Button
            variant="contained"
            color="primary"
            href="https://dl.acm.org/doi/10.1145/3613905.3647975">
            Go to paper in ACM Digital Library
          </Button>
        </Stack>
      </Stack>

      {/* Section */}
      <Stack
        direction="column"
        sx={{
          padding: "2rem",
          gap: "1.5rem",
          marginTop: "2rem",
          width: "60%",
        }}>
        <Heading1>Learning</Heading1>
        <Heading2>Use all available sources</Heading2>
        <Body>
          Using a variety of sources, combining user surveys, market reports,
          academic literature, and competitive analysis in similar spaces, we
          managed to finely isolate a specific pain point. I find the
          incorporation of academic research especially useful in these contexts
          and plan on leveraging it in future projects{" "}
        </Body>

        <Heading2>Test your tone</Heading2>
        <Body>
          There are many different ways to present the same information. Once
          the core features and architecture were decided, we realised these
          could be delivered in a more personal or formal tone. Testing out
          these two methods of conveying information revealed that there are
          significant differences in the outcome of each - revealing a dimension
          to design that sits atop strong UX flows that I now pay attention to
          in all my projects.
        </Body>
      </Stack>
    </Stack>
  );
}
