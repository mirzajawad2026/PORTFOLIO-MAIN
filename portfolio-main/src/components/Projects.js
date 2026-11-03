"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");

      // ================================
      // PROJECT CARDS
      // ================================

      cards.forEach((card, index) => {
        const visual = card.querySelector(".project-visual");
        const image = card.querySelector(".project-image");
        const content = card.querySelector(".project-content");
        const number = card.querySelector(".project-number");
        const line = card.querySelector(".project-line");
        const meta = card.querySelector(".project-meta");
        const title = card.querySelector(".project-title");
        const description = card.querySelector(".project-description");
        const techItems = card.querySelectorAll(".project-tech span");
        const buttons = card.querySelectorAll(".project-button");
        const glow = card.querySelector(".project-glow");

        // --------------------------------
        // CARD REVEAL
        // --------------------------------

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // --------------------------------
        // VISUAL REVEAL
        // --------------------------------

        gsap.fromTo(
          visual,
          {
            opacity: 0,
            scale: 0.88,
            rotateY: index % 2 === 0 ? -8 : 8,
          },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // --------------------------------
        // IMAGE PARALLAX
        // --------------------------------

        gsap.fromTo(
          image,
          {
            scale: 1.25,
            yPercent: -10,
          },
          {
            scale: 1,
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: visual,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );

        // --------------------------------
        // CONTENT
        // --------------------------------

        gsap.fromTo(
          content,
          {
            opacity: 0,
            x: index % 2 === 0 ? 80 : -80,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // --------------------------------
        // NUMBER
        // --------------------------------

        gsap.fromTo(
          number,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );

        // --------------------------------
        // META
        // --------------------------------

        gsap.fromTo(
          meta,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.25,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 78%",
            },
          }
        );

        // --------------------------------
        // TITLE
        // --------------------------------

        gsap.fromTo(
          title,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.35,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
            },
          }
        );

        // --------------------------------
        // LINE
        // --------------------------------

        gsap.fromTo(
          line,
          {
            width: "0%",
          },
          {
            width: "100%",
            duration: 1.2,
            delay: 0.45,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 72%",
            },
          }
        );

        // --------------------------------
        // DESCRIPTION
        // --------------------------------

        gsap.fromTo(
          description,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
            },
          }
        );

        // --------------------------------
        // TECH BADGES
        // --------------------------------

        gsap.fromTo(
          techItems,
          {
            opacity: 0,
            y: 20,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            delay: 0.55,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 68%",
            },
          }
        );

        // --------------------------------
        // BUTTONS
        // --------------------------------

        gsap.fromTo(
          buttons,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            delay: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 65%",
            },
          }
        );

        // --------------------------------
        // GLOW PARALLAX
        // --------------------------------

        gsap.to(glow, {
          y: index % 2 === 0 ? -80 : 80,
          x: index % 2 === 0 ? 40 : -40,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });

        // --------------------------------
        // CARD FLOAT
        // --------------------------------

        gsap.to(card, {
          y: index % 2 === 0 ? -18 : 18,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 2.5,
          },
        });

        // --------------------------------
        // IMAGE MOUSE TILT
        // --------------------------------

        const handleMove = (e) => {
          if (window.innerWidth < 900) return;

          const rect = visual.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const rotateX = (y / rect.height - 0.5) * -5;
          const rotateY = (x / rect.width - 0.5) * 5;

          gsap.to(visual, {
            rotateX,
            rotateY,
            duration: 0.5,
            ease: "power3.out",
          });
        };

        const handleLeave = () => {
          gsap.to(visual, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.5)",
          });
        };

        visual.addEventListener("mousemove", handleMove);
        visual.addEventListener("mouseleave", handleLeave);

        return () => {
          visual.removeEventListener("mousemove", handleMove);
          visual.removeEventListener("mouseleave", handleLeave);
        };
      });

      // =================================
      // HEADER
      // =================================

      gsap.fromTo(
        ".projects-heading",
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".projects-intro",
        {
          opacity: 0,
          x: 80,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          delay: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        }
      );

      // =================================
      // BACKGROUND TEXT
      // =================================

      gsap.to(".projects-bg-text", {
        xPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // =================================
      // RED LIGHT
      // =================================

      gsap.to(".projects-light", {
        x: 250,
        y: 150,
        scale: 1.4,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="projects-section"
    >
      {/* BACKGROUND */}

      <div className="projects-noise" />

      <div className="projects-light" />

      <div className="projects-bg-text">
        SELECTED WORK • SELECTED WORK • SELECTED WORK
      </div>

      {/* HEADER */}

      <div className="projects-header">
        <div className="projects-heading">
          <div className="section-label">
            <span />
            SELECTED WORK / 2026
          </div>

          <h2>
            PROJECTS
            <br />
            <span>THAT MOVE</span>
            <br />
            TO PRODUCT.
          </h2>
        </div>

        <div className="projects-intro">
          <p>
            A selection of digital products, business systems
            and modern software experiences designed and
            developed with performance, usability and
            scalability in mind.
          </p>

          <div className="project-count">
            <strong>03</strong>

            <div>
              <span>FEATURED</span>
              <small>PROJECTS</small>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT LIST */}

      <div className="projects-list">
        {projects.map((p, index) => (
          <article
            key={p.title}
            className={`project-card ${
              index % 2 === 0
                ? "project-left"
                : "project-right"
            }`}
          >
            {/* NUMBER */}

            <div className="project-number">
              0{index + 1}
            </div>

            {/* VISUAL */}

            <div className="project-visual">
              <div className="project-glow" />

              <div className="project-image-wrapper">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="project-image"
                  sizes="(max-width: 900px) 100vw, 60vw"
                  priority={index === 0}
                />

                <div className="project-image-overlay" />

                <div className="image-corner top-left" />
                <div className="image-corner top-right" />
                <div className="image-corner bottom-left" />
                <div className="image-corner bottom-right" />

                <div className="view-project">
                  <span>VIEW PROJECT</span>
                  <strong>↗</strong>
                </div>
              </div>
            </div>

            {/* CONTENT */}

            <div className="project-content">
              <div className="project-meta">
                <span>{p.tag}</span>
                <span>2026</span>
              </div>

              <h3 className="project-title">
                {p.title}
              </h3>

              <div className="project-line" />

              <p className="project-description">
                {p.desc}
              </p>

              {p.tech && (
                <div className="project-tech">
                  {p.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              )}

              <div className="project-buttons">
                {p.links.map((link) => (
                  <a
                    key={link}
                    href="#contact"
                    className="project-button"
                  >
                    <span>{link.toUpperCase()}</span>
                    <strong>↗</strong>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ENDING */}

      <div className="projects-ending">
        <div className="ending-line" />

        <span>MORE PROJECTS COMING</span>

        <strong>↓</strong>

        <div className="ending-line" />
      </div>
    </section>
  );
}