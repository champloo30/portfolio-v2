import React from 'react'
import Image from 'next/image'
import Baby from '../assets/baby-shower-screenshot.png'
import PKMO from '../assets/pkmo-screenshot.png'
import Cookoff from '../assets/cookoff-screenshot.png'
import admin from '../assets/admin-screenshot.png'
import store from '../assets/store-screenshot.png'
import YTTC from '../assets/yttc-screenshot.png'
import tims from '../assets/tims-screenshot.png'

export default function ProjectsPage() {
  return (
    <div id='projects' className='h-full md:h-[220rem] lg:h-[145rem] flex flex-col gap-16 lg:gap-12 items-center md:items-start lg:items-center justify-center font-light_display dark:font-dark_display mx-8 md:mx-16 py-24 mt-80 md:mt-48 lg:mt-32'>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light_mono dark:font-dark_mono text-primary dark:text-dark_primary">Some Things I’ve Made</h1>
      <div className='flex flex-col gap-16 lg:gap-32'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0 bg-tertiary/60 dark:bg-dark_tertiary/60 lg:bg-inherit lg:dark:bg-inherit w-[22rem] md:w-full p-4 lg:p-0 rounded'>
          <div className='flex justify-center items-center lg:h-[254px] lg:w-[32rem] lg:bg-title/50 lg:dark:bg-dark_title/50 rounded'>
            <Image 
              className='lg:opacity-50 lg:hover:opacity-100 rounded transition linear duration-300 md:w-[40rem] lg-tab:w-[46rem]'
              src={PKMO}
              width={512}
              height={420}
              alt='Peace Kingdom Ministries of Ohio'
            />
          </div>
          <div className='flex flex-col justify-center lg:flex-1 items-start lg:w-96 lg:items-end text-left lg:text-right gap-4'>
            <h3 className='font-light_mono dark:font-dark_mono text-title dark:text-dark_title'>Project #1</h3>
            <h2 className='font-light_mono dark:font-dark_mono text-primary dark:text-dark_primary hover:text-title dark:hover:text-dark_title text-2xl transition linear duration-300'>
              <a href="http://peacekmo.org" target="_blank" rel="noopener noreferrer">Peace Kingdom Ministries of Ohio</a>
            </h2>
            <div className='relative lg:w-[28rem] md:p-4 md:bg-light lg:bg-tertiary md:dark:bg-dark lg:dark:bg-dark_tertiary rounded'>
              <p className='text-left lg:text-right text-primary dark:text-dark_primary'>A multi-page dynamic website for Peace Kingdom Ministries of Ohio. A non-demoninational church, regularly updated each month with new content.</p>
            </div>
            <ul className='flex flex-row gap-4 font-light_mono dark:font-dark_mono text-secondary dark:text-dark_secondary font-bold'>
              <li>React</li>
              <li>Sass</li>
              <li>Firebase</li>
            </ul>
            <div className='flex flex-row justify-center gap-4'>
              <a href="https://github.com/champloo30/pkmoSite" target="_blank" rel="noopener noreferrer">
                <svg className='fill-secondary dark:fill-dark_secondary w-5 hover:fill-title dark:hover:fill-dark_title transition linear duration-500' viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1873.256 674.212c0-122.468-35.728-230.622-106.325-321.88 15.712-57.683 32.5-171.972-20.77-313.703-5.596-15.066-17.864-26.796-33.146-32.07-19.155-6.564-122.144-30.347-328.552 110.953-84.157-22.169-172.94-33.576-264.844-34.114-91.582.538-180.366 11.945-264.306 34.114C648.689-23.68 545.7-.005 526.437 6.56c-15.282 5.165-27.55 17.003-33.146 32.177-53.162 141.623-36.374 255.912-20.555 313.594-70.704 91.582-106.54 199.629-106.54 321.88 0 422.826 221.905 557.131 432.188 605.666-46.49 50.903-95.24 125.158-105.68 219.537-71.78 26.044-257.633 78.13-325.109-44.015-3.013-5.596-73.394-137.641-215.017-148.08-25.075 1.184-84.587 4.305-101.052 54.346-18.51 55.961 39.495 97.716 67.906 117.41.538.323 55.745 31.962 93.841 132.045.969 4.628 23.783 114.72 134.951 181.55 87.492 52.731 202.319 63.493 341.252 32.284 0 23.46-.323 48.212-.43 63.386l-.324 31.101H796.34l.215-29.81c1.937-161.532 2.045-164.653-30.778-181.656-12.484-6.457-27.012-7.964-40.356-3.659-136.243 41.002-246.98 40.033-320.052-2.798-70.488-41.54-85.985-108.908-88.89-119.67-3.875-10.653-8.072-20.662-12.269-30.24 126.987 145.713 372.138 77.161 463.289 33.792 18.833-8.825 30.778-27.765 30.778-48.535 0-149.372 148.295-244.182 149.802-245.15 19.371-12.16 28.949-35.19 23.998-57.36-4.95-22.276-23.352-39.065-46.06-41.755-223.626-26.796-452.204-109.338-452.204-518.388 0-106.325 33.577-198.983 99.76-275.175 12.915-15.067 16.681-36.052 9.579-54.562-9.793-25.397-36.482-112.782-.323-234.819 35.729 4.09 110.845 24.321 231.16 110.307 13.344 9.578 30.455 12.376 46.383 7.856 80.497-23.568 170.356-36.267 259.248-36.805 89.321.538 179.073 13.237 259.786 36.805 15.927 4.52 32.93 1.722 46.382-7.856 121.176-86.631 196.4-106.433 230.73-110.63 36.482 122.145 9.793 209.745 0 235.142-7.21 18.51-3.444 39.603 9.578 54.562 66.076 75.977 99.545 168.527 99.545 275.175 0 409.157-229.115 491.161-453.173 517.527-20.985 2.475-38.634 16.896-44.984 37.02-6.456 20.017-.538 42.078 15.067 56.284 6.35 5.703 14.958 12.483 25.074 20.231 51.333 39.28 137.211 105.034 137.211 259.571 0 85.448-1.399 354.273-1.399 354.273l107.617.539s1.399-269.257 1.399-354.812c0-141.838-56.499-229.976-110.845-285.937 210.39-48.427 431.65-182.517 431.65-604.696" fill-rule="evenodd"/>
                </svg>
              </a>
              <a href="http://peacekmo.org" target="_blank" rel="noopener noreferrer">
                <svg className='fill-secondary dark:fill-dark_secondary w-6 hover:fill-title dark:hover:fill-dark_title transition linear duration-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h279v60H180v600h600v-279h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60v-218L382-339Z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div id='project-2' className='flex flex-col-reverse lg:flex-row justify-center items-center gap-4 lg:gap-0 bg-tertiary/60 dark:bg-dark_tertiary lg:bg-inherit lg:dark:bg-inherit p-4 lg:p-0 w-[22rem] md:w-full rounded'>
          <div className='lg:w-96 flex lg:flex-1 flex-col justify-center items-start text-left gap-4'>
            <h3 className='font-light_mono dark:font-dark_mono text-title dark:text-dark_title'>Project #2</h3>
            <h2 className='font-light_mono dark:font-dark_mono text-primary dark:text-dark_primary hover:text-title dark:hover:text-dark_title text-2xl transition linear duration-300'>
              <a href="https://kbm-cookoff.vercel.app/" target="_blank" rel="noopener noreferrer">KBM Cook Off</a>
            </h2>
            <div className='relative z-10 lg:w-[27rem] md:p-4 md:bg-light lg:bg-tertiary dark:bg-dark_tertiary md:dark:bg-dark_tertiary rounded'>
              <p className='text-left text-primary dark:text-dark_primary'>This is a single page website to promote the first cook off competition for a local church. It also allows users to sign up for the cook off as participants or judges through the integration of Google Forms.</p>
            </div>
            <ul className='flex flex-row flex-wrap gap-4 font-light_mono dark:font-dark_mono text-secondary dark:text-dark_secondary font-bold'>
              <li>Next.js</li>
              <li>Google Forms</li>
              <li>Vercel</li>
            </ul>
            <div className='flex flex-row justify-center gap-4'>
              <a href="https://github.com/champloo30/kbm-cookoff" target="_blank" rel="noopener noreferrer">
                <svg className='fill-secondary dark:fill-dark_secondary w-5 hover:fill-title dark:hover:fill-dark_title transition linear duration-500' viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1873.256 674.212c0-122.468-35.728-230.622-106.325-321.88 15.712-57.683 32.5-171.972-20.77-313.703-5.596-15.066-17.864-26.796-33.146-32.07-19.155-6.564-122.144-30.347-328.552 110.953-84.157-22.169-172.94-33.576-264.844-34.114-91.582.538-180.366 11.945-264.306 34.114C648.689-23.68 545.7-.005 526.437 6.56c-15.282 5.165-27.55 17.003-33.146 32.177-53.162 141.623-36.374 255.912-20.555 313.594-70.704 91.582-106.54 199.629-106.54 321.88 0 422.826 221.905 557.131 432.188 605.666-46.49 50.903-95.24 125.158-105.68 219.537-71.78 26.044-257.633 78.13-325.109-44.015-3.013-5.596-73.394-137.641-215.017-148.08-25.075 1.184-84.587 4.305-101.052 54.346-18.51 55.961 39.495 97.716 67.906 117.41.538.323 55.745 31.962 93.841 132.045.969 4.628 23.783 114.72 134.951 181.55 87.492 52.731 202.319 63.493 341.252 32.284 0 23.46-.323 48.212-.43 63.386l-.324 31.101H796.34l.215-29.81c1.937-161.532 2.045-164.653-30.778-181.656-12.484-6.457-27.012-7.964-40.356-3.659-136.243 41.002-246.98 40.033-320.052-2.798-70.488-41.54-85.985-108.908-88.89-119.67-3.875-10.653-8.072-20.662-12.269-30.24 126.987 145.713 372.138 77.161 463.289 33.792 18.833-8.825 30.778-27.765 30.778-48.535 0-149.372 148.295-244.182 149.802-245.15 19.371-12.16 28.949-35.19 23.998-57.36-4.95-22.276-23.352-39.065-46.06-41.755-223.626-26.796-452.204-109.338-452.204-518.388 0-106.325 33.577-198.983 99.76-275.175 12.915-15.067 16.681-36.052 9.579-54.562-9.793-25.397-36.482-112.782-.323-234.819 35.729 4.09 110.845 24.321 231.16 110.307 13.344 9.578 30.455 12.376 46.383 7.856 80.497-23.568 170.356-36.267 259.248-36.805 89.321.538 179.073 13.237 259.786 36.805 15.927 4.52 32.93 1.722 46.382-7.856 121.176-86.631 196.4-106.433 230.73-110.63 36.482 122.145 9.793 209.745 0 235.142-7.21 18.51-3.444 39.603 9.578 54.562 66.076 75.977 99.545 168.527 99.545 275.175 0 409.157-229.115 491.161-453.173 517.527-20.985 2.475-38.634 16.896-44.984 37.02-6.456 20.017-.538 42.078 15.067 56.284 6.35 5.703 14.958 12.483 25.074 20.231 51.333 39.28 137.211 105.034 137.211 259.571 0 85.448-1.399 354.273-1.399 354.273l107.617.539s1.399-269.257 1.399-354.812c0-141.838-56.499-229.976-110.845-285.937 210.39-48.427 431.65-182.517 431.65-604.696" fill-rule="evenodd"/>
                </svg>
              </a>
              <a href="https://kbm-cookoff.vercel.app/" target="_blank" rel="noopener noreferrer">
                <svg className='fill-secondary dark:fill-dark_secondary w-6 hover:fill-title dark:hover:fill-dark_title transition linear duration-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h279v60H180v600h600v-279h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60v-218L382-339Z"/></svg>
              </a>
            </div>
          </div>
          <div className='flex justify-center items-center lg:h-[320px] lg:w-[32rem] bg-title/50 dark:bg-dark_title/50 rounded'>
            <Image 
              className='lg:opacity-50 lg:hover:opacity-100 rounded transition linear duration-300 md:w-[40rem] lg-tab:w-[46rem]'
              src={Cookoff}
              width={512}
              height={200}
              alt='KBM Cook Off'
            />
          </div>
        </div>
        {/* <div id='project-2' className='flex flex-col-reverse lg:flex-row justify-center items-center gap-4 lg:gap-0 bg-tertiary/60 dark:bg-dark_tertiary lg:bg-inherit lg:dark:bg-inherit p-4 lg:p-0 w-[22rem] md:w-full rounded'>
          <div className='lg:w-96 flex lg:flex-1 flex-col justify-center items-start text-left gap-4'>
          <h3 className='font-light_mono dark:font-dark_mono text-title dark:text-dark_title'>Project #2</h3>
          <h2 className='font-light_mono dark:font-dark_mono text-primary dark:text-dark_primary hover:text-title dark:hover:text-dark_title text-2xl transition linear duration-300'>
          <a href="http://peacekmo.org" target="_blank" rel="noopener noreferrer">Productivia App</a>
          </h2>
          <div className='relative z-10 lg:w-[27rem] md:p-4 md:bg-light lg:bg-tertiary dark:bg-dark_tertiary md:dark:bg-dark_tertiary rounded'>
          <p className='text-left text-primary dark:text-dark_primary'>This is a productivity app called made using the MERN stack. This is my first fullstack application that includes multiple APIs, authentication, and much more.</p>
          </div>
          <ul className='flex flex-row flex-wrap gap-4 font-light_mono dark:font-dark_mono text-secondary dark:text-dark_secondary font-bold'>
          <li>React</li>
          <li>Sass</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Heroku</li>
          </ul>
          <div className='flex flex-row justify-center gap-4'>
          <a href="https://github.com/champloo30/productivia-app" target="_blank" rel="noopener noreferrer">
          <svg className='fill-secondary dark:fill-dark_secondary w-5 hover:fill-title dark:hover:fill-dark_title transition linear duration-500' viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
          <path d="M1873.256 674.212c0-122.468-35.728-230.622-106.325-321.88 15.712-57.683 32.5-171.972-20.77-313.703-5.596-15.066-17.864-26.796-33.146-32.07-19.155-6.564-122.144-30.347-328.552 110.953-84.157-22.169-172.94-33.576-264.844-34.114-91.582.538-180.366 11.945-264.306 34.114C648.689-23.68 545.7-.005 526.437 6.56c-15.282 5.165-27.55 17.003-33.146 32.177-53.162 141.623-36.374 255.912-20.555 313.594-70.704 91.582-106.54 199.629-106.54 321.88 0 422.826 221.905 557.131 432.188 605.666-46.49 50.903-95.24 125.158-105.68 219.537-71.78 26.044-257.633 78.13-325.109-44.015-3.013-5.596-73.394-137.641-215.017-148.08-25.075 1.184-84.587 4.305-101.052 54.346-18.51 55.961 39.495 97.716 67.906 117.41.538.323 55.745 31.962 93.841 132.045.969 4.628 23.783 114.72 134.951 181.55 87.492 52.731 202.319 63.493 341.252 32.284 0 23.46-.323 48.212-.43 63.386l-.324 31.101H796.34l.215-29.81c1.937-161.532 2.045-164.653-30.778-181.656-12.484-6.457-27.012-7.964-40.356-3.659-136.243 41.002-246.98 40.033-320.052-2.798-70.488-41.54-85.985-108.908-88.89-119.67-3.875-10.653-8.072-20.662-12.269-30.24 126.987 145.713 372.138 77.161 463.289 33.792 18.833-8.825 30.778-27.765 30.778-48.535 0-149.372 148.295-244.182 149.802-245.15 19.371-12.16 28.949-35.19 23.998-57.36-4.95-22.276-23.352-39.065-46.06-41.755-223.626-26.796-452.204-109.338-452.204-518.388 0-106.325 33.577-198.983 99.76-275.175 12.915-15.067 16.681-36.052 9.579-54.562-9.793-25.397-36.482-112.782-.323-234.819 35.729 4.09 110.845 24.321 231.16 110.307 13.344 9.578 30.455 12.376 46.383 7.856 80.497-23.568 170.356-36.267 259.248-36.805 89.321.538 179.073 13.237 259.786 36.805 15.927 4.52 32.93 1.722 46.382-7.856 121.176-86.631 196.4-106.433 230.73-110.63 36.482 122.145 9.793 209.745 0 235.142-7.21 18.51-3.444 39.603 9.578 54.562 66.076 75.977 99.545 168.527 99.545 275.175 0 409.157-229.115 491.161-453.173 517.527-20.985 2.475-38.634 16.896-44.984 37.02-6.456 20.017-.538 42.078 15.067 56.284 6.35 5.703 14.958 12.483 25.074 20.231 51.333 39.28 137.211 105.034 137.211 259.571 0 85.448-1.399 354.273-1.399 354.273l107.617.539s1.399-269.257 1.399-354.812c0-141.838-56.499-229.976-110.845-285.937 210.39-48.427 431.65-182.517 431.65-604.696" fill-rule="evenodd"/>
          </svg>
          </a>
          {/* <a href="https://productivia-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <svg className='fill-secondary dark:fill-dark_secondary w-6 hover:fill-title dark:hover:fill-dark_title transition linear duration-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h279v60H180v600h600v-279h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60v-218L382-339Z"/></svg>
          </a> 
          </div>
          </div>
          <div className='flex justify-center items-center lg:h-[244px] lg:w-[32rem] bg-title/50 dark:bg-dark_title/50 rounded'>
          <Image 
          className='lg:opacity-50 lg:hover:opacity-100 rounded transition linear duration-300 md:w-[40rem] lg-tab:w-[46rem]'
          src={Productivia}
          width={512}
          height={440}
          alt='Productivia App'
          />
          </div>
          </div> */}
          <div id='project-3' className='flex flex-col-reverse lg:flex-row-reverse justify-center items-center gap-4 lg:gap-0 bg-tertiary/60 dark:bg-dark_tertiary lg:bg-inherit lg:dark:bg-inherit p-4 lg:p-0 w-[22rem] md:w-full rounded'>
            <div className='lg:w-96 flex lg:flex-1 flex-col justify-center items-start lg:items-end gap-4'>
              <h3 className='font-light_mono dark:font-dark_mono text-title dark:text-dark_title'>Project #3</h3>
              <h2 className='font-light_mono dark:font-dark_mono text-primary dark:text-dark_primary hover:text-title dark:hover:text-dark_title text-2xl transition linear duration-300'>
                <a href="https://klad-baby-shower-rsvp.vercel.app/" target="_blank" rel="noopener noreferrer">Baby Shower RSVP</a>
              </h2>
              <div className='relative z-10 lg:w-[27rem] md:p-4 md:bg-light lg:bg-tertiary dark:bg-dark_tertiary md:dark:bg-dark_tertiary rounded'>
                <p className='text-left lg:text-right text-primary dark:text-dark_primary'>This is a single page website to promote a baby shower. It also allows users to RSVP through the integration of Google Forms.</p>
              </div>
              <ul className='flex flex-row flex-wrap gap-4 font-light_mono dark:font-dark_mono text-secondary dark:text-dark_secondary font-bold'>
                <li>Next.js</li>
                <li>Google Forms</li>
                <li>Vercel</li>
              </ul>
              <div className='flex flex-row justify-center gap-4'>
                <a href="https://github.com/champloo30/baby-shower-rsvp" target="_blank" rel="noopener noreferrer">
                  <svg className='fill-secondary dark:fill-dark_secondary w-5 hover:fill-title dark:hover:fill-dark_title transition linear duration-500' viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1873.256 674.212c0-122.468-35.728-230.622-106.325-321.88 15.712-57.683 32.5-171.972-20.77-313.703-5.596-15.066-17.864-26.796-33.146-32.07-19.155-6.564-122.144-30.347-328.552 110.953-84.157-22.169-172.94-33.576-264.844-34.114-91.582.538-180.366 11.945-264.306 34.114C648.689-23.68 545.7-.005 526.437 6.56c-15.282 5.165-27.55 17.003-33.146 32.177-53.162 141.623-36.374 255.912-20.555 313.594-70.704 91.582-106.54 199.629-106.54 321.88 0 422.826 221.905 557.131 432.188 605.666-46.49 50.903-95.24 125.158-105.68 219.537-71.78 26.044-257.633 78.13-325.109-44.015-3.013-5.596-73.394-137.641-215.017-148.08-25.075 1.184-84.587 4.305-101.052 54.346-18.51 55.961 39.495 97.716 67.906 117.41.538.323 55.745 31.962 93.841 132.045.969 4.628 23.783 114.72 134.951 181.55 87.492 52.731 202.319 63.493 341.252 32.284 0 23.46-.323 48.212-.43 63.386l-.324 31.101H796.34l.215-29.81c1.937-161.532 2.045-164.653-30.778-181.656-12.484-6.457-27.012-7.964-40.356-3.659-136.243 41.002-246.98 40.033-320.052-2.798-70.488-41.54-85.985-108.908-88.89-119.67-3.875-10.653-8.072-20.662-12.269-30.24 126.987 145.713 372.138 77.161 463.289 33.792 18.833-8.825 30.778-27.765 30.778-48.535 0-149.372 148.295-244.182 149.802-245.15 19.371-12.16 28.949-35.19 23.998-57.36-4.95-22.276-23.352-39.065-46.06-41.755-223.626-26.796-452.204-109.338-452.204-518.388 0-106.325 33.577-198.983 99.76-275.175 12.915-15.067 16.681-36.052 9.579-54.562-9.793-25.397-36.482-112.782-.323-234.819 35.729 4.09 110.845 24.321 231.16 110.307 13.344 9.578 30.455 12.376 46.383 7.856 80.497-23.568 170.356-36.267 259.248-36.805 89.321.538 179.073 13.237 259.786 36.805 15.927 4.52 32.93 1.722 46.382-7.856 121.176-86.631 196.4-106.433 230.73-110.63 36.482 122.145 9.793 209.745 0 235.142-7.21 18.51-3.444 39.603 9.578 54.562 66.076 75.977 99.545 168.527 99.545 275.175 0 409.157-229.115 491.161-453.173 517.527-20.985 2.475-38.634 16.896-44.984 37.02-6.456 20.017-.538 42.078 15.067 56.284 6.35 5.703 14.958 12.483 25.074 20.231 51.333 39.28 137.211 105.034 137.211 259.571 0 85.448-1.399 354.273-1.399 354.273l107.617.539s1.399-269.257 1.399-354.812c0-141.838-56.499-229.976-110.845-285.937 210.39-48.427 431.65-182.517 431.65-604.696" fill-rule="evenodd"/>
                  </svg>
                </a>
                <a href="https://klad-baby-shower-rsvp.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <svg className='fill-secondary dark:fill-dark_secondary w-6 hover:fill-title dark:hover:fill-dark_title transition linear duration-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h279v60H180v600h600v-279h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60v-218L382-339Z"/></svg>
                </a>
              </div>
            </div>
            <div className='flex justify-center items-center lg:h-[320px] lg:w-[32rem] bg-title/50 dark:bg-dark_title/50 rounded'>
              <Image 
                className='lg:opacity-50 lg:hover:opacity-100 rounded transition linear duration-300 md:w-[40rem] lg-tab:w-[46rem]'
                src={Baby}
                width={512}
                height={200}
                alt='KBM Cook Off'
              />
            </div>
          </div>
        <div id='project-4' className='flex flex-col lg:flex-row-reverse justify-center items-center w-[22rem] md:w-full bg-tertiary/60 dark:bg-dark_tertiary/60 lg:bg-inherit dark:lg:bg-inherit p-4 lg:p-0 gap-4 lg:gap-0 rounded'>
          <div className='flex justify-center items-center lg:h-[264px] lg:w-[32rem] bg-title/50 dark:bg-dark_title/50 rounded'>
            <Image 
              className='lg:opacity-50 lg:hover:opacity-100 rounded transition linear duration-300 md:w-[40rem] lg-tab:w-[45rem]'
              src={admin}
              width={512}
              height={200}
              alt='Ecommerce Admin'
            />
          </div>
          <div className='flex lg:flex-1 flex-col justify-center item-start text-left gap-4 md:w-full lg:w-96'>
            <h3 className='font-light_mono dark:font-dark_mono text-title dark:text-dark_title'>Project #4</h3>
            <h2 className='font-light_mono dark:font-dark_mono text-primary dark:text-dark_primary hover:text-title dark:hover:text-dark_title text-2xl transition linear duration-300'>
              <a href="https://ecommerce-admin-demo.vercel.app/" target="_blank" rel="noopener noreferrer">Ecommerce Admin Demo</a>
            </h2>
            <div className='relative lg:w-[27rem] md:p-4 md:bg-light lg:bg-tertiary lg:dark:bg-dark_tertiary md:dark:bg-dark rounded'>
              <p className='text-left text-primary dark:text-dark_primary'>An ecommerce admin dashboard that allows a store owner to take full control of there site with this CMS. Adding products, billboards, even categories are all available to change.</p>
            </div>
            <ul className='flex flex-row gap-4 font-light_mono dark:font-dark_mono text-secondary dark:text-dark_secondary font-bold'>
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>Vercel</li>
            </ul>
            <div className='flex flex-row justify-center gap-4'>
              <a href="https://github.com/champloo30/admin-demo" target="_blank" rel="noopener noreferrer">
                <svg className='fill-secondary dark:fill-dark_secondary w-5 hover:fill-title dark:hover:fill-dark_title transition linear duration-500' viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1873.256 674.212c0-122.468-35.728-230.622-106.325-321.88 15.712-57.683 32.5-171.972-20.77-313.703-5.596-15.066-17.864-26.796-33.146-32.07-19.155-6.564-122.144-30.347-328.552 110.953-84.157-22.169-172.94-33.576-264.844-34.114-91.582.538-180.366 11.945-264.306 34.114C648.689-23.68 545.7-.005 526.437 6.56c-15.282 5.165-27.55 17.003-33.146 32.177-53.162 141.623-36.374 255.912-20.555 313.594-70.704 91.582-106.54 199.629-106.54 321.88 0 422.826 221.905 557.131 432.188 605.666-46.49 50.903-95.24 125.158-105.68 219.537-71.78 26.044-257.633 78.13-325.109-44.015-3.013-5.596-73.394-137.641-215.017-148.08-25.075 1.184-84.587 4.305-101.052 54.346-18.51 55.961 39.495 97.716 67.906 117.41.538.323 55.745 31.962 93.841 132.045.969 4.628 23.783 114.72 134.951 181.55 87.492 52.731 202.319 63.493 341.252 32.284 0 23.46-.323 48.212-.43 63.386l-.324 31.101H796.34l.215-29.81c1.937-161.532 2.045-164.653-30.778-181.656-12.484-6.457-27.012-7.964-40.356-3.659-136.243 41.002-246.98 40.033-320.052-2.798-70.488-41.54-85.985-108.908-88.89-119.67-3.875-10.653-8.072-20.662-12.269-30.24 126.987 145.713 372.138 77.161 463.289 33.792 18.833-8.825 30.778-27.765 30.778-48.535 0-149.372 148.295-244.182 149.802-245.15 19.371-12.16 28.949-35.19 23.998-57.36-4.95-22.276-23.352-39.065-46.06-41.755-223.626-26.796-452.204-109.338-452.204-518.388 0-106.325 33.577-198.983 99.76-275.175 12.915-15.067 16.681-36.052 9.579-54.562-9.793-25.397-36.482-112.782-.323-234.819 35.729 4.09 110.845 24.321 231.16 110.307 13.344 9.578 30.455 12.376 46.383 7.856 80.497-23.568 170.356-36.267 259.248-36.805 89.321.538 179.073 13.237 259.786 36.805 15.927 4.52 32.93 1.722 46.382-7.856 121.176-86.631 196.4-106.433 230.73-110.63 36.482 122.145 9.793 209.745 0 235.142-7.21 18.51-3.444 39.603 9.578 54.562 66.076 75.977 99.545 168.527 99.545 275.175 0 409.157-229.115 491.161-453.173 517.527-20.985 2.475-38.634 16.896-44.984 37.02-6.456 20.017-.538 42.078 15.067 56.284 6.35 5.703 14.958 12.483 25.074 20.231 51.333 39.28 137.211 105.034 137.211 259.571 0 85.448-1.399 354.273-1.399 354.273l107.617.539s1.399-269.257 1.399-354.812c0-141.838-56.499-229.976-110.845-285.937 210.39-48.427 431.65-182.517 431.65-604.696" fill-rule="evenodd"/>
                </svg>
              </a>
              <a href="https://ecommerce-admin-demo.vercel.app/" target="_blank" rel="noopener noreferrer">
                <svg className='fill-secondary dark:fill-dark_secondary w-6 hover:fill-title dark:hover:fill-dark_title transition linear duration-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h279v60H180v600h600v-279h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60v-218L382-339Z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div id='project-5' className='flex flex-col-reverse lg:flex-row-reverse justify-center items-center bg-tertiary/60 dark:bg-dark_tertiary/60 lg:bg-inherit lg:dark:bg-inherit p-4 lg:p-0 w-[22rem] md:w-full gap-4 lg:gap-0 rounded'>
          <div className='lg:w-96 flex lg:flex-1 flex-col justify-center items-start lg:items-end text-left gap-4'>
            <h3 className='font-light_mono dark:font-dark_mono text-title dark:text-dark_title'>Project #5</h3>
            <h2 className='font-light_mono dark:font-dark_mono text-primary dark:text-dark_primary hover:text-title dark:hover:text-dark_title text-2xl transition linear duration-300'>
              <a href="http://peacekmo.org" target="_blank" rel="noopener noreferrer">Ecommerce Store Demo</a>
            </h2>
            <div className='relative z-10 lg:w-[27rem] md:p-4 md:bg-light lg:bg-tertiary lg:dark:bg-dark_tertiary md:dark:bg-dark rounded'>
              <p className='text-left lg:text-right text-primary dark:text-dark_primary'>A demo ecommerce store with all the bells and whistles, including a fully functional cart using the Stripe CLI.</p>
            </div>
            <ul className='flex flex-row gap-4 font-light_mono dark:font-dark_mono text-secondary dark:text-dark_secondary font-bold'>
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>Stripe</li>
              <li>Vercel</li>
            </ul>
            <div className='flex flex-row justify-center gap-4'>
            <a href="https://github.com/champloo30/e-commerce-demo" target="_blank" rel="noopener noreferrer">
                <svg className='fill-secondary dark:fill-dark_secondary w-5 hover:fill-title dark:hover:fill-dark_title transition linear duration-500' viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1873.256 674.212c0-122.468-35.728-230.622-106.325-321.88 15.712-57.683 32.5-171.972-20.77-313.703-5.596-15.066-17.864-26.796-33.146-32.07-19.155-6.564-122.144-30.347-328.552 110.953-84.157-22.169-172.94-33.576-264.844-34.114-91.582.538-180.366 11.945-264.306 34.114C648.689-23.68 545.7-.005 526.437 6.56c-15.282 5.165-27.55 17.003-33.146 32.177-53.162 141.623-36.374 255.912-20.555 313.594-70.704 91.582-106.54 199.629-106.54 321.88 0 422.826 221.905 557.131 432.188 605.666-46.49 50.903-95.24 125.158-105.68 219.537-71.78 26.044-257.633 78.13-325.109-44.015-3.013-5.596-73.394-137.641-215.017-148.08-25.075 1.184-84.587 4.305-101.052 54.346-18.51 55.961 39.495 97.716 67.906 117.41.538.323 55.745 31.962 93.841 132.045.969 4.628 23.783 114.72 134.951 181.55 87.492 52.731 202.319 63.493 341.252 32.284 0 23.46-.323 48.212-.43 63.386l-.324 31.101H796.34l.215-29.81c1.937-161.532 2.045-164.653-30.778-181.656-12.484-6.457-27.012-7.964-40.356-3.659-136.243 41.002-246.98 40.033-320.052-2.798-70.488-41.54-85.985-108.908-88.89-119.67-3.875-10.653-8.072-20.662-12.269-30.24 126.987 145.713 372.138 77.161 463.289 33.792 18.833-8.825 30.778-27.765 30.778-48.535 0-149.372 148.295-244.182 149.802-245.15 19.371-12.16 28.949-35.19 23.998-57.36-4.95-22.276-23.352-39.065-46.06-41.755-223.626-26.796-452.204-109.338-452.204-518.388 0-106.325 33.577-198.983 99.76-275.175 12.915-15.067 16.681-36.052 9.579-54.562-9.793-25.397-36.482-112.782-.323-234.819 35.729 4.09 110.845 24.321 231.16 110.307 13.344 9.578 30.455 12.376 46.383 7.856 80.497-23.568 170.356-36.267 259.248-36.805 89.321.538 179.073 13.237 259.786 36.805 15.927 4.52 32.93 1.722 46.382-7.856 121.176-86.631 196.4-106.433 230.73-110.63 36.482 122.145 9.793 209.745 0 235.142-7.21 18.51-3.444 39.603 9.578 54.562 66.076 75.977 99.545 168.527 99.545 275.175 0 409.157-229.115 491.161-453.173 517.527-20.985 2.475-38.634 16.896-44.984 37.02-6.456 20.017-.538 42.078 15.067 56.284 6.35 5.703 14.958 12.483 25.074 20.231 51.333 39.28 137.211 105.034 137.211 259.571 0 85.448-1.399 354.273-1.399 354.273l107.617.539s1.399-269.257 1.399-354.812c0-141.838-56.499-229.976-110.845-285.937 210.39-48.427 431.65-182.517 431.65-604.696" fill-rule="evenodd"/>
                </svg>
              </a>
              <a href="https://my-ecommerce-demo.vercel.app/" target="_blank" rel="noopener noreferrer">
                <svg className='fill-secondary dark:fill-dark_secondary w-6 hover:fill-title dark:hover:fill-dark_title transition linear duration-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h279v60H180v600h600v-279h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60v-218L382-339Z"/></svg>
              </a>
            </div>
          </div>
          <div className='flex justify-center items-center lg:h-[260px] lg:w-[32rem] bg-title/50 dark:bg-dark_title/50 rounded'>
            <Image 
              className='lg:opacity-50 lg:hover:opacity-100 rounded transition linear duration-300 md:w-[40rem] lg-tab:w-[46rem]'
              src={store}
              width={512}
              height={420}
              alt='Ecommerce Store Demo'
            />
          </div>
        </div>
        <div id='project-6' className='flex flex-col lg:flex-row-reverse justify-center items-center w-[22rem] md:w-full bg-tertiary/60 dark:bg-dark_tertiary/60 lg:bg-inherit dark:lg:bg-inherit p-4 lg:p-0 gap-4 lg:gap-0 rounded'>
          <div className='flex justify-center items-center lg:h-[250px] lg:w-[32rem] bg-title/50 dark:bg-dark_title/50 rounded'>
            <Image 
              className='lg:opacity-50 lg:hover:opacity-100 rounded transition linear duration-300 md:w-[40rem] lg-tab:w-[45rem]'
              src={YTTC}
              width={512}
              height={200}
              alt='Your Ticket To College, LLC'
            />
          </div>
          <div className='flex lg:flex-1 flex-col justify-center items-start text-right gap-4 md:w-full lg:w-96'>
            <h3 className='font-light_mono dark:font-dark_mono text-title dark:text-dark_title'>Project #6</h3>
            <h2 className='font-light_mono dark:font-dark_mono text-primary dark:text-dark_primary hover:text-title dark:hover:text-dark_title text-2xl transition linear duration-300'>
              <a href="https://www.yttc-llc.com/" target="_blank" rel="noopener noreferrer">Your Ticket To College, LLC</a>
            </h2>
            <div className='relative lg:w-[27rem] md:p-4 md:bg-light lg:bg-tertiary lg:dark:bg-dark_tertiary md:dark:bg-dark rounded'>
              <p className='text-left text-primary dark:text-dark_primary'>A multi-page dynamic website redesign for Your Ticket To College, LLC. A reputable tutoring service for high school students looking to take the SAT and ACT exams.</p>
            </div>
            <ul className='flex flex-row gap-4 font-light_mono dark:font-dark_mono text-secondary dark:text-dark_secondary font-bold'>
              <li>Wix</li>
            </ul>
            <div className='flex flex-row justify-center gap-4'>
              
              <a href="https://www.yttc-llc.com/" target="_blank" rel="noopener noreferrer">
                <svg className='fill-secondary dark:fill-dark_secondary w-6 hover:fill-title dark:hover:fill-dark_title transition linear duration-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h279v60H180v600h600v-279h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60v-218L382-339Z"/></svg>
              </a>
            </div>
          </div>
        </div>
        {/* <div id='project-6' className='flex flex-col-reverse lg:flex-row justify-center items-center bg-tertiary/60 dark:bg-dark_tertiary/60 lg:bg-inherit lg:dark:bg-inherit p-4 lg:p-0 w-[22rem] md:w-full gap-4 lg:gap-0 rounded'>
          <div className='lg:w-96 flex lg:flex-1 flex-col justify-center items-start text-left gap-4'>
            <h3 className='font-light_mono dark:font-dark_mono text-title dark:text-dark_title'>Project #6</h3>
            <h2 className='flex flex-col font-light_mono dark:font-dark_mono text-primary dark:text-dark_primary hover:text-title dark:hover:text-dark_title text-2xl transition linear duration-300'>
              <a href="http://github.com/champloo30/tims" target="_blank" rel="noopener noreferrer">This Is My Story</a>
              <span className='text-title dark:text-dark_title text-base'>In Progress...</span>
            </h2>
            <div className='relative z-10 lg:w-[27rem] md:p-4 md:bg-light lg:bg-tertiary lg:dark:bg-dark_tertiary md:dark:bg-dark rounded'>
              <p className='text-left text-primary dark:text-dark_primary'>T.I.M.S. doubles as a blog and social media with a specific purpose of spreading awareness of domestic violence and also being a safe space for those that have been or are victims of abuse of any kind.</p>
            </div>
            <ul className='flex flex-row gap-4 font-light_mono dark:font-dark_mono text-secondary dark:text-dark_secondary font-bold'>
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>MongoDB</li>
              <li>Prisma</li>
            </ul>
            <div className='flex flex-row justify-center gap-4'>
            <a href="https://github.com/champloo30/tims" target="_blank" rel="noopener noreferrer">
                <svg className='fill-secondary dark:fill-dark_secondary w-5 hover:fill-title dark:hover:fill-dark_title transition linear duration-500' viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1873.256 674.212c0-122.468-35.728-230.622-106.325-321.88 15.712-57.683 32.5-171.972-20.77-313.703-5.596-15.066-17.864-26.796-33.146-32.07-19.155-6.564-122.144-30.347-328.552 110.953-84.157-22.169-172.94-33.576-264.844-34.114-91.582.538-180.366 11.945-264.306 34.114C648.689-23.68 545.7-.005 526.437 6.56c-15.282 5.165-27.55 17.003-33.146 32.177-53.162 141.623-36.374 255.912-20.555 313.594-70.704 91.582-106.54 199.629-106.54 321.88 0 422.826 221.905 557.131 432.188 605.666-46.49 50.903-95.24 125.158-105.68 219.537-71.78 26.044-257.633 78.13-325.109-44.015-3.013-5.596-73.394-137.641-215.017-148.08-25.075 1.184-84.587 4.305-101.052 54.346-18.51 55.961 39.495 97.716 67.906 117.41.538.323 55.745 31.962 93.841 132.045.969 4.628 23.783 114.72 134.951 181.55 87.492 52.731 202.319 63.493 341.252 32.284 0 23.46-.323 48.212-.43 63.386l-.324 31.101H796.34l.215-29.81c1.937-161.532 2.045-164.653-30.778-181.656-12.484-6.457-27.012-7.964-40.356-3.659-136.243 41.002-246.98 40.033-320.052-2.798-70.488-41.54-85.985-108.908-88.89-119.67-3.875-10.653-8.072-20.662-12.269-30.24 126.987 145.713 372.138 77.161 463.289 33.792 18.833-8.825 30.778-27.765 30.778-48.535 0-149.372 148.295-244.182 149.802-245.15 19.371-12.16 28.949-35.19 23.998-57.36-4.95-22.276-23.352-39.065-46.06-41.755-223.626-26.796-452.204-109.338-452.204-518.388 0-106.325 33.577-198.983 99.76-275.175 12.915-15.067 16.681-36.052 9.579-54.562-9.793-25.397-36.482-112.782-.323-234.819 35.729 4.09 110.845 24.321 231.16 110.307 13.344 9.578 30.455 12.376 46.383 7.856 80.497-23.568 170.356-36.267 259.248-36.805 89.321.538 179.073 13.237 259.786 36.805 15.927 4.52 32.93 1.722 46.382-7.856 121.176-86.631 196.4-106.433 230.73-110.63 36.482 122.145 9.793 209.745 0 235.142-7.21 18.51-3.444 39.603 9.578 54.562 66.076 75.977 99.545 168.527 99.545 275.175 0 409.157-229.115 491.161-453.173 517.527-20.985 2.475-38.634 16.896-44.984 37.02-6.456 20.017-.538 42.078 15.067 56.284 6.35 5.703 14.958 12.483 25.074 20.231 51.333 39.28 137.211 105.034 137.211 259.571 0 85.448-1.399 354.273-1.399 354.273l107.617.539s1.399-269.257 1.399-354.812c0-141.838-56.499-229.976-110.845-285.937 210.39-48.427 431.65-182.517 431.65-604.696" fill-rule="evenodd"/>
                </svg>
              </a>
              {/* <a href="https://my-ecommerce-demo.vercel.app/" target="_blank" rel="noopener noreferrer">
                <svg className='fill-secondary dark:fill-dark_secondary w-6 hover:fill-title dark:hover:fill-dark_title transition linear duration-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h279v60H180v600h600v-279h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60v-218L382-339Z"/></svg>
              </a>
            </div>
          </div>
          <div className='flex justify-center items-center lg:h-[256px] lg:w-[32rem] bg-title/50 dark:bg-dark_title/50 rounded'>
            <Image 
              className='lg:opacity-50 lg:hover:opacity-100 rounded transition linear duration-300 md:w-[40rem] lg-tab:w-[46rem]'
              src={tims}
              width={512}
              height={420}
              alt='Ecommerce Store Demo'
            />
          </div>
        </div> */}
      </div>
    </div>
  )
}
