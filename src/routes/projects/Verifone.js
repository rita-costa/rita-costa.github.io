import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import Body from "../../components/Typography/Body";
import Heading1 from "../../components/Typography/Heading1";
import Heading2 from "../../components/Typography/Heading2";
import ProjectContextBox from "../../components/ProjectContextBox";
import ProjectTitle from "../../components/ProjectTitle";

export default function Verifone() {
  return (
    <Stack alignItems={"center"}>
      <ProjectTitle
        title="Verifone: Building Trust in the Second Hand Phone Market"
        info="CHI 2024 Student Design Competition Finalist"
        skills="User Research, UX Design, Academic Writing"
      />

      {/* Context Box */}
      <ProjectContextBox>
        <Heading1>--- THE PROBLEM</Heading1>
        <Heading2>People don't trust buying second-hand phones.</Heading2>
        <Body>
          There are widespread concerns around the quality, security, and
          condition of second hand phones. Questions like, How much battery life
          does it have? How old is it? are not easily answered in existing
          selling platforms, even though this information does exist within the
          phone. This information imbalance leads to less people choosing to buy
          second-hand, which is a more sustainable option.
        </Body>

        <Heading1>--- THE TEAM</Heading1>
        <Body>
          This project started as a group assignment for our Interaction Design
          module, where we were asked to focus on one UN Sustainable Development
          Goals. We chose to tackle Goal 12: Responsible Consumption and
          Production, by addressing the low interest in the second-hand
          technology market. Each of us had different experiences related to
          design, which we combined to design a second-hand phone selling
          platform that addressed existing concerns.
        </Body>

        <Typography variant="body1" component="h3" align="left">
          <b>--- MY ROLE</b>{" "}
          <span style={{ paddingLeft: "1rem" }}>
            Survey design, UX design, Academic writing
          </span>
        </Typography>

        <Typography variant="body1" component="h3" align="left">
          <b>--- PROJECT TIME</b>{" "}
          <span style={{ paddingLeft: "1rem" }}>2 months</span>
        </Typography>
      </ProjectContextBox>

      {/* Section */}
      <Stack
        direction="column"
        sx={{
          maxWidth: "800px",
          padding: "2rem",
          gap: "1.5rem",
          marginTop: "2rem",
        }}>
        <Typography variant="body1" component="h3" align="left">
          <b>--- KEY DECISION #1 </b>
        </Typography>

        <Typography variant="h6" align="left">
          Pinpointing the problem
        </Typography>

        <Typography variant="body1" component="p" align="left">
          We first needed to understand why the second-hand phone market was not
          thriving. To do this, we combined insights from multiple sources:
          <ul>
            <li>
              <b>User survey</b> → I designed a survey to understand people's
              general attitudes towards second-hand tech. The primary motivator
              for buying second-hand is the lower cost, but many people still
              had old tech stored at home, which was not being introduced to the
              market.
            </li>
            <li>
              <b>Market reports</b> → We analysed a Hubbub 2023 market report on
              views on e-waste from Gen Z, which revealed the main reason for
              younger generations not wanting to buy second hand was not a lack
              of awareness, but a distrust in the quality of second hand devices
              and seeling platforms.
            </li>
            <li>
              <b>Competitive analysis</b> → We looked at second-hand car and the
              second-hand fashion markets to better understand the strategies
              used in these contexts and user values they address. In these, the
              quality appraisal aspect of buying was emphasised - Carfax
              provides detailed reports on cars, and 3DShot by Cappacity
              provides a detailed and interactive view of each product.
            </li>
          </ul>
          <br />
          We then generated multiple problem statements, plotting them on a
          matrix of environmental impact (how urgent is it for the planet?)
          against user impact (how painful is it for the person?). We selected
          the problem statement with a combined high impact:
          <Typography
            variant="h6"
            align="left"
            sx={{ paddingTop: "1rem", paddingBottom: "1rem", width: "75%" }}>
            <i>
              “I want to buy a second-hand phone because it is cost-efficient,
              but I do not trust the process.”
            </i>
          </Typography>
          It tackles the second-hand phone market from the buyers' perspective,
          as there is an abundance of selling platforms, yet a shortage in
          consumers.
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ paddingTop: "1rem" }}>
            <Typography variant="body1" component="p" align="left">
              <b>High environmental impact</b> <br /> Manufacturing accounts for
              85% of e-waste’s carbon footprint. If buying second-hand becomes
              mainstream, this could prolong the lifespan of current devices and
              significantly diminish waste.
            </Typography>
            <Typography variant="body1" component="p" align="left">
              <b>High user impact</b> <br /> The perceived unreliability of used
              phones deters interested consumers. If we address this, we can
              provide opportunities for substantial cost savings for many.
            </Typography>
          </Stack>
          <br />
          To deepen our understanding of users’ needs in context, we created a
          persona. This was useful as a way to guide the creation of the three
          success metrics a solution would need to fulfil to address the problem
          statement:
          <ul>
            <li>
              <b>(1) Accessible:</b> I want to easily access this information as
              part of the purchasing journey;
            </li>
            <li>
              <b>(2) Reliable:</b> I want to feel that the information presented
              to me is unbiased and accurate;{" "}
            </li>
            <li>
              <b>(3) Clear:</b> I want to fully understand the condition of the
              specific phone I am purchasing;{" "}
            </li>
          </ul>
        </Typography>
      </Stack>

      <Stack
        direction="column"
        sx={{
          maxWidth: "800px",
          padding: "2rem",
          gap: "1.5rem",
          marginTop: "2rem",
        }}>
        <Typography variant="body1" component="h3" align="left">
          <b>--- KEY DECISION #2 </b>
        </Typography>

        <Typography variant="h6" align="left">
          Affective vs functional prototypes
        </Typography>

        <Typography variant="body1" component="p" align="left">
          We decided to design a{" "}
          <b>
            second-hand phone selling platform that prioritised transparency on
            the phone condition for buyers
          </b>
          . From this, we conducted some initial ideation - using the Crazy 8
          method to rapidly produce many ideas. From this, we realised there was
          a pattern emerging:
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ paddingTop: "1rem" }}>
            <Typography variant="body1" component="p" align="left">
              <b>Similar</b> <br /> Many of our ideas had to do with making the
              details about the phone quality transparent, including interactive
              elements to inspect specific phone parts like the battery health
              and cosmetic imperfections.
            </Typography>
            <Typography variant="body1" component="p" align="left">
              <b>Different</b> <br /> There was a split between the way this
              information was presented - one in a very factual and formal way,
              and another using emotional and anthropomorphic aspects to
              encourage users’ to ‘bond’ with prospective phones.
            </Typography>
          </Stack>
          <br />
          Both approaches had support from academic literature and existing
          markets (Carfax using ‘carfox’ as a mascot, and Vesitaire Collective
          using a more serious tone). So, we decided to test both in
          mid-fidelity Figma prototypes, including the same information and
          interactive elements on the phone condition.
          <br />
          <br />
          We conducted <b>6 think-aloud usability tests</b> to evaluate the the
          usability of the current prototypes and to understand the effect of
          each tone on users’ perceived trust. In randomised order, users freely
          navigated the screens of each version and were then asked to compare
          their experiences - they were also asked to rate the confidence in
          information accuracy on a 1 to 7 scale for each version.
          <br />
          <br />
          We found that the functional type on average was considered more
          trustworthy, with users highlighting the clean aesthetics being more
          congruent with the context. However, there were also comments that the
          affective prototype conveyed a sense of uniqueness and individuality
          of the phone better. In our final iteration, therefore, we decided to
          combine these two approaches.
        </Typography>
      </Stack>

      <Stack
        direction="column"
        sx={{
          maxWidth: "800px",
          padding: "2rem",
          gap: "1.5rem",
          marginTop: "2rem",
        }}>
        <Typography variant="body1" component="h3" align="left">
          <b>--- THE OUTCOME </b>
        </Typography>

        <Typography variant="h6" align="left">
          A mid-fidelity prototype and CHI 2024 student design competition
          finalist
        </Typography>

        <Typography variant="body1" component="p" align="left">
          We combined both delivery methods to produce a final mid-fidelity
          prototype on Figma. Keeping the familiarity and clean aesthetics of
          the functional prototype with smaller touches in copy inspired by the
          affective prototype, to add a sense of personality.
        </Typography>

        <Typography variant="h6" align="left">
          ... and presented our work at the CHI 2024 conference
        </Typography>

        <Typography variant="body1" component="p" align="left">
          Our work was selected as a finalist in the Student Design Competition
          for the ACM’s CHI 2024 conference - selected for high potential impact
          and throrough execution. We had the opportunity to present a poster of
          our work to leading researchers in the HCI field. I still regularly
          attend CHI conferences to follow the latest design discussions
          happening in the field.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          href="https://dl.acm.org/doi/10.1145/3613905.3647975">
          Go to paper in ACM Digital Library
        </Button>
      </Stack>

      <Stack
        direction="column"
        sx={{
          maxWidth: "800px",
          padding: "2rem",
          gap: "1.5rem",
          marginTop: "2rem",
        }}>
        <Typography variant="body1" component="h3" align="left">
          <b>--- LEARNING </b>
        </Typography>

        <Typography variant="h6" align="left">
          Use all available sources
        </Typography>

        <Typography variant="body1" component="p" align="left">
          This project highlighted the usefulness of using a variety of sources
          to understand a problem space. By combining user surveys, market
          reports, academic literature, and competitive analysis in similar
          spaces, we managed to finely isolate a specific pain point. I find the
          incorporation of academic research especially useful in these contexts
          and plan on leveraging it in future projects
        </Typography>

        <Typography variant="h6" align="left">
          Test your tone
        </Typography>

        <Typography variant="body1" component="p" align="left">
          There are many different ways to present the same information. Once
          the core features and architecture were decided, we realised these
          could be delivered in a more personal or formal tone. Testing out
          these two methods of conveying information revealed that there are
          significant differences in the outcome of each - revealing a dimension
          to design that sits atop strong UX flows that I now pay attention to
          in all my projects.
        </Typography>
      </Stack>
    </Stack>
  );
}
