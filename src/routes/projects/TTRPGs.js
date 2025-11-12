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
        title="Virtual Realms: How the Online Medium Affects Character Immersion in Remote Tabletop Role-Playing Games"
        info="MSc HCI Dissertation 2024, Best Project Prize"
        skills="Qualitative User Research, Academic Writing"
      />

      {/* Context Box */}
      <ProjectContextBox>
        <Heading1>--- THE PROBLEM SPACE</Heading1>
        <Heading2>Many TTRPGs have moved online since the pandemic.</Heading2>
        <Body>
          Tabletop roleplaying games (TTRPGs) are known to support wellbeing and
          identity exploration, with character immersion playing a central role
          in these benefits. While these dynamics are well-documented in
          co-located settings, the rise of remote and hybrid TTRPG play,
          accelerated by the pandemic, has introduced new challenges and
          affordances that remain unexamined in the Human-Computer Interaction
          field.
        </Body>

        <Heading1>--- CONTEXT</Heading1>
        <Body>
          This was my final dissertation project for my Human-Computer
          Interaction MSc at UCL. I independently conducted this research and
          analysis, supported by my project supervisor.
        </Body>

        <Typography variant="body1" component="h3" align="left">
          <b>--- MY ROLE</b>{" "}
          <span style={{ paddingLeft: "1rem" }}>
            Primary researcher, primary author
          </span>
        </Typography>

        <Typography variant="body1" component="h3" align="left">
          <b>--- PROJECT TIME</b>{" "}
          <span style={{ paddingLeft: "1rem" }}>5 months</span>
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
        <Heading1>--- THE RESEARCH QUESTION</Heading1>
        <Heading2>
          How does the online medium and its affordances affect players'
          character immersion in remote TTRPGs?
        </Heading2>
        <Body>
          (a)  How do players leverage online features for character immersion
          in a remote setting? <br /> (b)  What aspects of the online medium
          help or hinder character immersion? <br /> (c)  How can online
          platforms be improved to enhance character immersion?
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
        <Heading1>--- METHODOLOGY</Heading1>
        <Heading2>Elicitation diary and interview study.</Heading2>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ paddingTop: "1rem" }}>
          <Body>
            <b>x2 Post-session diaries over 2 weeks</b> <br /> Almost immediate
            reflections after a play session to capture specific interactions
            while they are still fresh, while not affecting the game experience
            by recording play itself. Players were also asked to share
            screenshots of parts of the session and digital tools to better
            understand the play context.
          </Body>
          <Body>
            <b>x2 Interviews</b> <br /> Gathered general views in an
            introductory interview to understand feelings around remote play and
            explored themes mentioned in diaries further (after a preliminary
            analysis) in a follow-up interview, using diaries as probes to
            elicit deeper reflection.
          </Body>
        </Stack>

        <Body>
          The goal of this data collection was to understand how players
          interacted in-character with the online medium. As character immersion
          so personal to each player I needed a method to elicit rich
          reflections while minimising intrusion to the gameplay experience,
          hence choosing not to record play sessions but asking for players to
          add artefacts to diary entries.
        </Body>

        <Body>
          <b>A hiccup: paired interviews</b> <br /> My initial intention was to
          conduct paired interviews with players in the same game, to understand
          different perspectives of the same experience. However, because of
          recruitment challenges, this was only possible with two pairs of
          participants. I still conducted these as paired interviews and the
          rest as individual ones, which still proved valuable as pairs who were
          interviewed created opportunities for discussion of opposing or
          different experiences.
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
        <Heading1>--- ANALYSIS</Heading1>
        <Heading2>Reflexive Thematic Analysis.</Heading2>
        <Body>
          I synthesised all collected data on NVivo and generated themes
          following Braun and Clarke’s Reflexive Thematic Analysis method -
          conducting a round of open coding and then iterating on codes and
          groupings until these generated overarching themes.
          <br />
          After each iteration, I discussed the patterns with my supervisor -
          this was important as I am considered an ‘insider’ in TTRPG culture
          (as a regular player myself). This is helpful for deeply engaging and
          reflecting on themes, but having an ‘outsider’ perspective ensured
          they were grounded and understandable to a wider audience (designers,
          academics, etc.).
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
        <Heading1>--- KEY FINDINGS</Heading1>
        <Heading2>I identified three main themes from this analysis:</Heading2>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ paddingTop: "1rem" }}>
          <Body>
            <b>Many Channels, Richer Channels</b> <br /> Online, players have
            access to audio-visual tools and multiple channels, which facilitate
            richer ways to engage in character, such as sharing audio, images,
            and texting in-character. These channels also separated
            non-narrative aspects from the main channel, such as through
            automated dice calculations, map visualisations, and text channels
            for questions, allowing for sustained focus on the story and
            characters.
          </Body>

          <Body>
            <b>Dice & Physicality</b> <br />
            Embodied aspects of play - especially rolling dice - were seen as
            essential for players to feel involved in the story and their
            characters. This contrasts with other game literature that argues
            that exposing mechanics creates friction to immersion. While players
            found virtual dice calculators convenient, there was a strong
            preference for a tactile and manual approach, as by bodily involving
            themselves, they could more easily evoke emotions related to the
            story.
          </Body>

          <Body>
            <b>Alibi vs Validation</b> <br />
            An important finding was of a tension borne of the physical and
            social distance between players. On one hand, this helped players
            feel less observed and more confident to roleplay more intensely -
            having a stronger ‘alibi’, as discussed in previous roleplay
            literature. However, this also prevented players from feeling
            reassured others were consistently paying attention and receptive to
            their character representations through physical indicators like eye
            contact.
          </Body>
        </Stack>
      </Stack>

      <Stack
        direction="column"
        sx={{
          maxWidth: "800px",
          padding: "2rem",
          gap: "1.5rem",
          marginTop: "2rem",
        }}>
        <Heading1>--- THE IMPACT</Heading1>
        <Heading2>MSc Project Prize, submitted to CHI’26</Heading2>
        <Body>
          From these themes, I outlined 5 specific design directions for
          character immersion in remote TTRPGs. These directions for future work
          can be leveraged by both researchers and TTRPG designers to either
          test or design TTRPGs that are more specifically adapted to remote
          play, and play into the specific constraints and tensions that this
          medium provides.
        </Body>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ paddingTop: "1rem" }}>
          <Body>
            <b>Balance social and character presence</b> <br /> Explore ways to
            balance social distance whilst helping players feel seen, possibly
            through animated avatars, voice changing software, and spatial audio
            to reduce audio overlap issues.
          </Body>

          <Body>
            <b>Leverage separate communication channels</b> <br />
            Maintain the separability of online channels to differentiate
            between narrative and non-narrative play aspects, and work to reduce
            friction of switching between these.
          </Body>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ paddingTop: "1rem" }}>
          <Body>
            <b>Enhance embodiment</b> <br />
            Explore how to maintain a physical component in remote TTRPGs while
            introducing the convenience of virtual tools, possibly through
            wearable devices or enhanced physical dice.
          </Body>

          <Body>
            <b>Leverage audio-visual tools further</b> <br /> Explore how the
            abundance of digital tools can make the sensory experience of play
            more immersive, for example, through AI playlists.
          </Body>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ paddingTop: "1rem" }}>
          <Body>
            <b>Adapt TTRPG design to remote settings</b> <br />
            Consider creating TTRPGs that explicitly leverage the constraints of
            the online medium into their story - for example ViewScream whose
            story is centred around video calls within a spaceship.
          </Body>
        </Stack>

        <Body>
          This project won the MSc Project Prize of the 2024 Human-Computer
          Interaction course at UCL - as the highest scored dissertation - and
          is currently under submission for the ACM CHI 2026 conference.
        </Body>

        <Button variant="contained" color="primary" href="">
          Download paper here
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
        <Heading1>--- LEARNING</Heading1>
        <Heading2>Plan for inconsistency</Heading2>
        <Body>
          Longitudinal studies can be especially effective for deeply exploring
          users’ internal experiences, especially if if is about an experience
          that happens regularly. However, life does get in the way. It was
          difficult to recruit player pairs and collect two diary entries for
          each participant, especially since it relied on a group activity that
          is often rescheduled.
          <br />
          Moving forward, I plan to incorporate considerations of buffer time
          for recruitment and between collection and analysis to allow for these
          inconsistencies.
        </Body>

        <Heading2>Artifact collection is rich</Heading2>
        <Body>
          An especially useful part of the study was asking users to provide
          screenshots of gameplay. The intention of this was for me as a
          researcher to understand user’s context better when reading their
          diary entries, but they proved surprisingly useful as prompts in
          follow-up interviews. Having a specific image to pull up and ask
          questions about allowed me to notice aspects that the participants
          missed when discussing their game (as to them, it is their normal) and
          delve into these more deeply. It also acted as a probe for
          participants to be transported back to a specific game moment, which
          allowed for richer recollections and reflections in interviews
          (compared to the shorter diaries).
          <br />
          Users tend to be more impatient with writing qualitative diary
          entries, so collecting artifacts in the process allows for richer
          reflections in follow-up interviews, which could be missed with only
          the text.
        </Body>
      </Stack>
    </Stack>
  );
}
