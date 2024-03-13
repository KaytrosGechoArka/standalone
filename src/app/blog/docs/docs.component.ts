import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../../header/header.component";

@Component({
    selector: 'app-docs',
    standalone: true,
    templateUrl: './docs.component.html',
    styleUrl: './docs.component.css',
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        HeaderComponent
    ]
})
export class DocsComponent implements OnInit {

  posts: any[] = [];
  showUpdateForm: boolean = false;
  selectedPost: any = {};

  showAddPostForm: boolean = false;
  newPost: any = {};

  constructor(private _postsService: PostsService) {}

  ngOnInit(): void {
    this.getPostedLists();
  }

  addPost(): void {
    this._postsService.addPost(this.newPost)
      .subscribe((response: any) => {
        this.posts.push(response); // Add the new post to the posts array
        console.log("Post Added Sucess fully")
        this.showAddPostForm = false; // Hide the add post form
      }, (error: any) => {
        console.error('Error adding post:', error);
      });
  }

  showAddForm(): void {
    this.newPost = {}; // Reset the new post object
    this.showAddPostForm = true; // Display the add post form
  }

  cancelAddForm(): void {
    this.showAddPostForm = false; // Hide the add post form
  }
  getPostedLists(): void {
    this._postsService.getPostedLists().subscribe(
      (response) => {
        // Handle the response from the service
        this.posts = response;
      },
      (error) => {
        // Handle any error that occurred during the HTTP request
        console.error(error);
      }
    );
  }
  openUpdateForm(post: any): void {
    // Open the update form and populate it with the selected post data
    this.showUpdateForm = true;
    this.selectedPost = { ...post };
  }

  closeUpdateForm(): void {
    // Close the update form
    this.showUpdateForm = false;
    this.selectedPost = {};
  }
  submitForm(): void {
    if (this.selectedPost.id) {
      // Update existing data
      this._postsService.updatePost(this.selectedPost.id, this.selectedPost)
        .subscribe(
          (response) => {
            console.log('Post updated successfully:', response);
            // Perform any additional actions after a successful update
            // For example, you can display a success message or refresh the list of posts
          },
          (error) => {
            console.error('Error updating post:', error);
            // Handle any error that occurred during the update process
            // For example, you can display an error message to the user
          },
          () => {
            // Close the update form after updating the post
            this.closeUpdateForm();
          }
        );
    } else {
      // Insert new data
      this._postsService.addPost(this.selectedPost)
        .subscribe(
          (response) => {
            console.log('Post inserted successfully:', response);
            // Perform any additional actions after a successful insert
            // For example, you can display a success message or refresh the list of posts
          },
          (error) => {
            console.error('Error inserting post:', error);
            // Handle any error that occurred during the insert process
            // For example, you can display an error message to the user
          },
          () => {
            // Close the update form after inserting the post
            this.closeUpdateForm();
          }
        );
    }
  }
}
